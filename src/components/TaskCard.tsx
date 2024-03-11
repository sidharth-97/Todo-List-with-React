import React from 'react'
import { RxCross2 } from "react-icons/rx";

const TaskCard = () => {
  return (
      <div className='flex text-txtclr border border-mark justify-between'>
          <div className='flex flex-col p-2'>
              <div className='text-xl font-semibold'>Task Title</div>
              <div>Task body about this task</div>
          </div>
          <div className='flex py-4 me-4'>
              <button className='border text-center  border-mark rounded-md p-1'>
                  <RxCross2 className=' text-lg text-mark'/>
              </button>
          </div>
    </div>
  )
}

export default TaskCard