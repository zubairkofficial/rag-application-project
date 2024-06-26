import faiss
import uuid
import os
import numpy as np
from langchain_community.llms import OpenAI
from langchain_community.llms import EmbeddingsChain
from api_keys import OPENAI_API_KEY

def text_to_vector(text, storage_dir='vector-data'):
    # Initialize OpenAI and embeddings chain
    openai_client = OpenAI(api_key=OPENAI_API_KEY)  # Set your OpenAI API key here
    embeddings_chain = EmbeddingsChain(model=openai_client)

    # Generate embeddings for the text
    embeddings = embeddings_chain.run(text)

    # Convert embeddings list to a numpy array (if necessary)
    vector = np.array(embeddings).astype('float32')

    # Create a FAISS index (Flat index for simplicity in this example)
    dimension = vector.shape[1]  # Dimension of the embeddings
    index = faiss.IndexFlatL2(dimension)
    index.add(vector.reshape(1, -1))  # Reshape vector to match FAISS requirements

    # Generate a unique filename with UUID
    file_name = f"{uuid.uuid4()}.faiss"
    file_path = os.path.join(storage_dir, file_name)

    # Ensure the storage directory exists
    os.makedirs(storage_dir, exist_ok=True)

    # Save the index
    faiss.write_index(index, file_path)

    return file_path