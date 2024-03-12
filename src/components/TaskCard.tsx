import React, { useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import ConfirmationModal from './ConfirmationModal';
import useTodo from '../hooks/Data';


interface Todo {
  id: number;
  title: string;
  content: string;
}

interface TaskCardProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  setEdit: React.Dispatch<React.SetStateAction<Todo>>;
}

const TaskCard: React.FC<TaskCardProps>  = ({ todos, deleteTodo, setEdit }) => {
  const handleClick = (todo:Todo) => {
    if (window.innerWidth < 768) {
      setEdit(todo);
    }
  };

  return (
    <div className='sm:bg-Lblack sm:p-16 sm:border sm:border-mark sm:m-14 sm:gap-4 p-5'>
      {todos.length >= 1 ? (
        <div className='sm:grid sm:grid-cols-3 sm:gap-3'>
          {todos.map((todo) => (
            <div key={todo.id} onClick={() => handleClick(todo)} className='flex text-txtclr border border-mark justify-between bg-Lblack'>
              <div className='flex flex-col p-2'>
                <div className='text-xl font-semibold'>{todo.title}</div>
                <div>{todo.content}</div>
              </div>
              <div className='flex py-4 me-4'>
                <ConfirmationModal todo={todo} deleteTodo={deleteTodo} setEdit={setEdit} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=' w-full text-center p-2 flex justify-center items-center'>
        <div className='border-y-4 border-y-mark w-32'>  <p className='text-txtclr'>No Tasks</p></div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
