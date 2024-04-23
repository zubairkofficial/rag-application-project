from langchain.openai import OpenAIEmbedder
from langchain.schema import Vector
from langchain.charoma import CharomaDb
import openai

# Initialize OpenAI API (make sure to set your API key)
openai.api_key = 'your-openai-api-key'

# Initialize the OpenAI Embedder with a specific model
embedder = OpenAIEmbedder(model="text-embedding-ada-002")

# Initialize Charoma Db (assuming it's a hypothetical database for vectors)
charoma_db = CharomaDb(database_url="your-database-url")

def text_to_vector_db(text):
    # Generate vector embedding from the text
    embedding = embedder.embed_text(text)
    
    # Create a Vector object (assuming this is the required format for Charoma Db)
    vector = Vector(values=embedding, metadata={"original_text": text})
    
    # Store the vector in Charoma Db
    charoma_db.store_vector(vector)
    
    return "Vector stored successfully!"

# Example usage
text = "Example text to convert into vector and store in the database."
result = text_to_vector_db(text)
print(result)
