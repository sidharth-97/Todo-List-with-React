import React, { useState } from 'react'

interface Todo{
    id: number,
    title: string,
    content:string
}

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const addTodo = ({ title, content }: { title: string, content: string }) => {
        console.log("second");
        
        setTodos([...todos, { id: Date.now(), title: title, content: content }])
        console.log(todos);
        
    }
    const deleteTodo = (id: number) => {
        console.log("reached delete");
        
        setTodos(todos.filter((todo) => todo.id != id))
        console.log(todos);
        
    }
    const editTodo = (id: number,title:string,content:string) => {
        const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, content } : todo
    );
    setTodos(updatedTodos);
    }
    return {
        addTodo, deleteTodo, todos,editTodo
  }
}

export default useTodo