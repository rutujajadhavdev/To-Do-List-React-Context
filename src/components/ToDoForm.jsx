import React, { useState } from "react";
import { useToDoContext } from "../contexts/index";

function ToDoForm() {
  const [task, setTask] = useState("");
  const { addToDo } = useToDoContext();

  const add = (e) => {
    e.preventDefault();
    if (!task) return;
    console.log('Submitting task:', task);
    addToDo({ task, completed: false });
    setTask(""); //emptying setTask state
  };
  return (
<div>
  
      <form color="black" onSubmit={add} className="flex justify-center items-center min-h-32">
        <input
          type="text"
          placeholder="Add your task...."
          className="w-2/3 max-w-xl px-8 py-3 bg-black bg-opacity-30 text-white placeholder-white rounded-xl shadow-lg focus:bg-white focus:text-black focus:placeholder-black transition duration-200 outline-none text-lg"
          value={task}
          onChange={e => 
            setTask(e.target.value)  
        }
        />
        <button
          type="submit"
          className="ml-4 px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl shadow-lg hover:bg-violet-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add
            </button>
      </form>

</div>

  );
}

export default ToDoForm;
