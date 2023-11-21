import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

interface ToDoProps {
  text: string;
  updateMode: () => void;
  deleteToDo: () => void;
}

const ToDo = ({ text, updateMode, deleteToDo }: ToDoProps) => {
  return (
    <div className="relative mt-4 bg-black text-white p-6 rounded-md">
      <div className="text">{text}</div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-20 flex gap-2">
        <BiEdit className="cursor-pointer text-2xl" onClick={updateMode} />
        <AiFillDelete className="cursor-pointer text-2xl" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
