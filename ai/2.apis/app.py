# we will integrate both of openai api and ollama in the form of routes in order to 
# create an api
# this app is responsible for creating all the apis

from fastapi import FastAPI
from langchain.prompts import ChatPromptTemplate
#from langchain.chat_models import ChatOpenAI
from langchain_openai import ChatOpenAI
from langserve import add_routes
import uvicorn
import os
from langchain_community.llms import Ollama


import streamlit as st
import os
from dotenv import load_dotenv

load_dotenv()

os.environ["OPENAI_API_KEY"]=os.getenv("OPENAI_API_KEY")
## Langsmith tracking
# os.environ["LANGCHAIN_TRACING_V2"] = "true"
# os.environ["LANGCHAIN_ API_KEY"]=os.getenv("LANGCHAIN_API_KEY")

app=FastAPI(
    title="Langchain Server",
    version="1.0",
    description="A simple API server"
)

# add_routes(
#     app,
#     ChatOpenAI(),
#     path="/openai"
# )

llm1 = ChatOpenAI()

##ollama llama2
llm2=Ollama(model="tinyllama")

prompt1=ChatPromptTemplate.from_template("Write me an essay about {topic} with 100 words")
prompt2=ChatPromptTemplate.from_template("Write me a poem about {topic} with 100 words")

add_routes(
    # this part is specified to interract with openai model denoted by "/essay"
    app,
    prompt1|llm1,
    path="/essay"     # the api url will be ended by /essay
)

add_routes(
    # this part is specified to interract with openai model denoted by "/essay"
    app,
    prompt2|llm2,
    path="/poem"     # the api url will be ended by /essay
)

if __name__=="__main__":  #python app.py for showcasing the docs and runnig the server
    
    # Uvicorn is an ASGI server used to run FastAPI applications in production or during development.
    # It's lightweight, fast, and optimized for asynchronous performance.
    # ASGI Asynchronous Server Gateway Interface
    uvicorn.run(app,host="localhost",port=8000)
    
    
    
    
    
    
    
 #http://localhost:8000/docs for sweager UI documentation
 
# What is Swagger?
# Swagger is an open-source framework that helps developers design, build, document, and 
# consume RESTful APIs. It provides tools to visualize and interact with APIs 
# through a user-friendly web interface.