import { useState } from "react";
import { FaPlus } from "react-icons/fa";


const Form = () => {
  const [update, setUpdate] = useState(false);
  const handleClick = () => {
    setUpdate((prev)=>!prev);
  };
  return (
    <div className="flex justify-center w-screen gap-1 items-center">
      <div className="flex flex-col gap-1 w-5/6">
        <div>
          <input
            className=" bg-Lblack text-txtclr border border-mark px-2 w-full"
            type="text"
            placeholder=" Title.."
          />
        </div>
        <div>
          <input
            className=" bg-Lblack text-txtclr border border-mark px-2 w-full"
            type="text"
            placeholder="Input.."
          />
        </div>
      </div>
      <div className="w-1/6 flex justify-center">
        <button
          onClick={handleClick}
          className="border border-mark p-3 text-xl text-mark rounded-md"
        >
          {update ? "UPDATE" : <FaPlus className="text-3xl"/>}
        </button>
      </div>
    </div>
  );
};

export default Form;
