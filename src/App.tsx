import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";


export default function App() {
  return (
    <div className="bg-Lblack min-h-screen">
      <Navbar />
      <Form />
      <TaskCard/>
    </div>
  )
}
