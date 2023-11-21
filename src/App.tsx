import { useEffect, useState } from 'react';
import './App.css'
import { addToDo, deleteToDo, getAllToDo, updateToDo } from './utils/HandleApi';
import ToDo from './components/ToDo';

export interface DataProps {
  text: string;
  _id: string;
}

function App() {
  const [toDo, setToDo] = useState<DataProps[]>([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id: string, text: string) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="max-w-[600px] m-auto p-4">
        <h1>ToDo App</h1>
        <div className="mt-4 flex gap-4 justify-center">
          <input
            className='outline-none w-400 p-1/2 border-b-2 border-black'
            type="text"
            placeholder="Add Todos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="bg-black text-white py-2 px-6 cursor-pointer"
            onClick={
              isUpdating
                ? () =>
                  updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
