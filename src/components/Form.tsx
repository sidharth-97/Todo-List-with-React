import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

interface Todo {
  id?: number;
  title: string;
  content: string;
}

interface FormProps {
  addTodo: (todo: Todo) => void;
  editTodo: (id: number, title: string, content: string) => void;
  edit: Todo;
  setEdit: any;
}


const Form: React.FC<FormProps> = ({ addTodo, edit,editTodo,setEdit }) => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    if (window.innerWidth > 768) {
      setTitle(edit.title)
      setContent(edit.content)
      console.log(title);
    }
  },[edit])

  const handleClick = () => {
    if(title.trim()=="")return toast.error("Cannot be empty")
    // setUpdate((prev)=>!prev);
    if (edit.id) {
      editTodo(edit.id, title, content)
      setEdit({})
      setTitle("")
      setContent("")
    return
  }
    
    addTodo({ title, content })
    setTitle("")
    setContent("")
    toast.success("Added sucess")
  };
  return (
    <div className="flex justify-center w-screen gap-1 items-center p-5">
      <div className="hidden sm:w-3/6 sm:mr-6"></div>
      <div className="flex flex-col gap-1 w-5/6 sm:w-2/6 sm:justify-start">
        <div>
          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className=" bg-Lblack text-txtclr border border-mark px-2 w-full"
            type="text"
            placeholder=" Title.."
          />
        </div>
        <div>
          <input
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className=" bg-Lblack text-txtclr border border-mark px-2 w-full"
            type="text"
            placeholder="Input.."
          />
        </div>
      </div>
      <div className="w-1/6 sm:w-1/6 flex justify-start">
        <button
          onClick={handleClick}
          className="border border-mark p-3 text-xl text-mark rounded-md"
        >
          {edit.title||edit.content ? "UPDATE" : <FaPlus className="text-3xl"/>}
        </button>
      </div>
    </div>
  );
};

export default Form;
