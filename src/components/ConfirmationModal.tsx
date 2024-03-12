import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "./UI/Button";
import { MdEdit } from "react-icons/md";
import { FaExclamation } from "react-icons/fa6";
import { toast } from "react-toastify";


interface Todo {
  id: number;
  title: string;
  content: string;
}

interface ConfirmationModalProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  setEdit: React.Dispatch<React.SetStateAction<Todo>>;
}


const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ todo, deleteTodo,setEdit}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mobile, setMobile] = useState(false)
  const [view,setView]=useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleYes = () => {
    deleteTodo(todo.id)
    toast.success("Deleted")
  }
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);

  const handleEdit = () => {
    console.log("here");
    
  setEdit(todo)
}

  return (
    <div className="max-w-2xl mx-auto">
     <button className="border text-center border-mark rounded-md p-1">
      {mobile && <RxCross2 onClick={toggleModal} className="text-lg text-mark" />}
      {!mobile && (view ? (
        <div className="flex gap-3">
          <MdEdit onClick={handleEdit} />
          <RxCross2 onClick={toggleModal} className="text-lg text-mark" />
        </div>
      ) : (
        <FaExclamation onClick={() => setView(true)} />
      ))}
    </button>
      <div
        id="confirmation-modal"
        aria-hidden="true"
        className={`${
          isModalOpen ? "fixed" : "hidden"
        }  inset-0 z-50 flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        <div className="relative w-screen max-w-md px-4 h-full md:h-auto">
          <div className="bg-Dblack rounded-lg shadow relative border border-mark text-txtclr">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center :hover:bg-gray-800 :hover:text-white"
                onClick={toggleModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="w-full flex flex-col justify-center h-full items-center mb-10 gap-2">
              <h1> Delete this task?</h1>
              <div className="flex gap-3">
                <div onClick={handleYes}> <Button text="Yes" /></div>
               
                <div onClick={toggleModal}><Button text="No"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
