import React from 'react'
import { RxCross2 } from "react-icons/rx";
import ConfirmationModal from './ConfirmationModal';

const TaskCard = () => {
  return (
      <div className='flex text-txtclr border border-mark justify-between bg-Lblack'>
          <div className='flex flex-col p-2'>
              <div className='text-xl font-semibold'>Task Title</div>
              <div>Task body about this task</div>
          </div>
          <div className='flex py-4 me-4'>
              <ConfirmationModal/>
          </div>
    </div>
  )
}

export default TaskCard