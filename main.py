from typing import List
from fastapi import FastAPI, Response
from pydantic import BaseModel

app = FastAPI()

todos: List[Todo] = []


class Todo(BaseModel):
    id: int
    title: str
    completed: bool = False


@app.get("/")
def hello():
    return Response(content="Hello, world!\n", media_type="text/plain")


@app.get("/todos")
def get_todos():
    return todos


@app.post("/todos")
def create_todo(todo: Todo):
    todos.append(todo)
    return todo


@app.get("/todos/{todo_id}")
def get_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            return todo
    return Response(status_code=404)


@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, updated: Todo):
    for i, todo in enumerate(todos):
        if todo.id == todo_id:
            todos[i] = updated
            return updated
    return Response(status_code=404)


@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int):
    for i, todo in enumerate(todos):
        if todo.id == todo_id:
            del todos[i]
            return Response(status_code=204)
    return Response(status_code=404)
