import React from 'react';
import Button from './UI/Button';

const EditTaskModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed text-txtclr bottom-0 left-0 w-full flex items-end justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="z-10 bg-Dblack p-8 rounded-lg shadow-lg w-96 mb-8">
        <form>
          <div className="mb-4 gap-1 flex flex-col">
                      <input type="text" id="taskName" name="taskName" className="mt-1 p-2 bg-Lblack w-full border border-mark rounded-md focus:outline-none focus:border-indigo-500" placeholder='Mini Input' />
                      <textarea className=' bg-Lblack border border-mark w-full' name="" id="" cols="30" rows="10" placeholder='Max input'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, minus. Amet cum tempora officia, voluptates modi facilis at, fugiat commodi nostrum repudiandae saepe eos nam ducimus? Iste dolore reprehenderit cum.
                      </textarea>
          </div>
          <div className="flex justify-center w-full gap-3 ">
           <Button text='Cancel'/><Button text='Save'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
