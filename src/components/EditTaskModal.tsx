import React, {useEffect, useState } from "react";
import Button from "./UI/Button";
import { toast } from "react-toastify";

interface Todo {
  id?: any;
  title: string;
  content: string;
}

interface EditTaskModalProps {
  isOpen: boolean;
  edit: Todo;
  editTodo: (id: number, title: string, content: string) => void;
  setEdit: any;
}


const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, edit,editTodo,setEdit }) => {
  const [title, setTitle] = useState(edit.title);
  const [content, setContent] = useState(edit.content);
  const [open,setOpen]=useState(isOpen)
  console.log(open, isOpen);
  useEffect(() => {
    setOpen(isOpen)
  },[isOpen])

  const handleSave = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    editTodo(edit.id, title, content)
    toast.success("Edit success")
    setEdit({})
  }
  const handleCancel = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setOpen(false)
}
  return (
    <div
      className={`fixed text-txtclr bottom-0 left-0 w-full flex items-end justify-center ${
        open ? "" : "hidden"
      }`}
    >
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="z-10 bg-Dblack p-8 rounded-lg shadow-lg w-96 mb-8">
        <form>
          <div className="mb-4 gap-1 flex flex-col">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="taskName"
              name="taskName"
              className="mt-1 p-2 bg-Lblack w-full border border-mark rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Mini Input"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className=" bg-Lblack border border-mark w-full"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Max input"
            >
            </textarea>
          </div>
          <div className="flex justify-center w-full gap-3 ">
            <div onClick={handleCancel}>
              {" "}
              <Button text="Cancel" />
            </div>
            <div onClick={handleSave}>
              {" "}
              <Button text="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
