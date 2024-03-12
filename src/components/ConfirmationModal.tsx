import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "./UI/Button";

const ConfirmationModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button className="border text-center  border-mark rounded-md p-1">
        <RxCross2 onClick={toggleModal} className=" text-lg text-mark" />
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
                <Button text="Yes" />
                <Button text="No" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
