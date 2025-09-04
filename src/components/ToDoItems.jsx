import { useState } from "react";
import { useToDoContext } from "../contexts";
function ToDoItems({ task }) {
  console.log('dispatching task');
  const [isEditable, setIsEditable] = useState(false);
  const [message, setMessage] = useState(task.task);

  const { deleteToDo, updateToDo, toggleComplete } = useToDoContext();

  const editMsg = () => {
    updateToDo(task.id, { ...task, task: message });
    setIsEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(task.id);
  };
  console.log(task);  
  return (
    
    // ToDo: change color for task completed
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-stone- duration-300  text-black/75 ${task.completed ? "bg-[#5bb6f9]" : "bg-violet-500"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={task.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`w-full bg-transparent border-b border outline-none text-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={message}
        readOnly={!isEditable} //set input to readonly when not in edit mode
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if(task.completed) return;
          if(isEditable) {
            editMsg();
          } else {
            setIsEditable((prev) => !prev); //toggle edit mode
          }
        }}
        disabled={task.completed}
      >
        {isEditable ? "🗃️" : "✏️"}

      </button>
      <button
      className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      onClick={() => deleteToDo(task.id)}  
      >❌</button>
    </div>
  );
}

export default ToDoItems;
