import { useState } from "react";
import EditTaskModal from "./components/EditTaskModal";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import useTodo from "./hooks/Data";

export default function App() {
  const { todos, addTodo, deleteTodo,editTodo } = useTodo()
  const [edit, setEdit] = useState({ title: "", content: "" })  
  console.log(edit);
  return (
    <div className="bg-Dblack min-h-screen">
      <Navbar />
      <Form addTodo={addTodo} edit={edit} editTodo={editTodo} setEdit={setEdit} />
      <TaskCard todos={todos} deleteTodo={deleteTodo} setEdit={setEdit} />
      <EditTaskModal isOpen={(edit.title || edit.content) ? true : false} edit={edit} editTodo={editTodo} setEdit={setEdit} />
    </div>
  )
}
