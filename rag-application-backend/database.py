import aiomysql
from typing import List, Dict, Tuple, Any

class Database:
    def __init__(self) -> None:
        self.host = 'localhost'
        self.port = 3306
        self.user = 'root'
        self.password = ''
        self.db = 'rag_application'

    async def connect(self):
        return await aiomysql.connect(host=self.host, port=self.port, user=self.user, password=self.password, db=self.db, cursorclass=aiomysql.DictCursor)

    async def execute(self, query: str, params: tuple = ()):
        async with await self.connect() as conn:
            async with conn.cursor() as cursor:
                await cursor.execute(query, params)
                await conn.commit()
                return cursor.lastrowid
            
    async def fetch(self, query: str, params: tuple = ()) -> List[Dict[str, Any]]:
        conn = await self.connect()  # Establish the connection
        try:
            cursor = await conn.cursor()
            await cursor.execute(query, params)
            result = await cursor.fetchall()
            return result
        finally:
            await conn.ensure_closed()


    async def insert(self, table: str, data: Dict[str, Any]):
        keys = ', '.join(data.keys())
        values = tuple(data.values())
        placeholders = ', '.join(['%s'] * len(data))
        query = f"INSERT INTO {table} ({keys}) VALUES ({placeholders})"
        return await self.execute(query, values)
    
    async def update(self, table: str, data: Dict[str, Any], conditions: Dict[str, Any]):
        set_clause = ', '.join([f"{key} = %s" for key in data])
        where_clause = ' AND '.join([f"{key} = %s" for key in conditions])
        query = f"UPDATE {table} SET {set_clause} WHERE {where_clause}"
        params = tuple(data.values()) + tuple(conditions.values())
        await self.execute(query, params)

    async def delete(self, table: str, conditions: Dict[str, Any]):
        where_clause = ' AND '.join([f"{key} = %s" for key in conditions])
        query = f"DELETE FROM {table} WHERE {where_clause}"
        params = tuple(conditions.values())
        await self.execute(query, params)

    async def all(self, table: str) -> List[Dict[str, Any]]:
        query = f"SELECT * FROM {table}"
        return await self.fetch(query)
    
    async def get(self, table: str, conditions: Dict[str, Any]) -> List[Dict[str, Any]]:
        where_clause = ' AND '.join([f"{key} = %s" for key in conditions])
        params = tuple(conditions.values())
        query = f"SELECT * FROM {table} WHERE {where_clause}"
        return await self.fetch(query, params)

    async def first(self, table: str, conditions: Dict[str, Any]) -> Dict[str, Any]:
        where_clause = ' AND '.join([f"{key} = %s" for key in conditions])
        params = tuple(conditions.values())
        query = f"SELECT * FROM {table} WHERE {where_clause} LIMIT 1"
        results = await self.fetch(query, params)
        return results[0] if results else None
    
    async def find(self, table: str, id: int) -> Dict[str, Any]:
        query = f"SELECT * FROM {table} WHERE id = %s LIMIT 1"
        results = await self.fetch(query, (id,))
        return results[0] if results else None
    
    async def with_relationships(self, base_table: str, relationships: List[Tuple[str, str, str, str]]) -> List[Dict[str, Any]]:
        # Assuming relationships are defined with alias for clarity and avoiding column name conflicts
        joins = " ".join(
            f"JOIN {related_table} ON {base_table}.{base_column} = {related_table}.{related_column}"
            for _, related_table, base_column, related_column in relationships
        )
        # Adjust SELECT to explicitly name related table columns if needed for clarity or avoiding column name conflicts
        select_columns = f"{base_table}.*, " + ", ".join([f"{rt}.id AS '{rt}.id', {rt}.name AS '{rt}.name'" for _, rt, _, _ in relationships])
        query = f"""
        SELECT {select_columns}
        FROM {base_table}
        {joins}
        """
        results = await self.fetch(query)
        return results
        # Manually reformat the results to nest related records
        # formatted_results = []
        # for row in results:
        #     base_record = {key: value for key, value in row.items() if not key.startswith(tuple([rt for _, rt, _, _ in relationships]))}
        #     for _, related_table, _, _ in relationships:
        #         base_record[related_table] = {key.split('.', 1)[1]: value for key, value in row.items() if key.startswith(related_table)}
        #     formatted_results.append(base_record)
        # return formatted_results



