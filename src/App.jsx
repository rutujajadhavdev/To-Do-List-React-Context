import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToDoContextProvider } from "./contexts";
import { ToDoForm, ToDoItems } from "./components/index"; 

function App() {
  const [tasks, setTasks] = useState([]);

const addToDo = (task) => {
  setTasks((prev) => [{ id: Date.now(), ...task }, ...prev]);
};

  const updateToDo = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? updatedTask : prevTask))
    );
  };

  const deleteToDo = (id) => {
    setTasks((prev) => prev.filter((prevTask) => prevTask.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask
      )
    );
  };

  useEffect(()=> {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks && tasks.length > 0)
    {
      setTasks(tasks)
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  console.log('tasks:', tasks);
  return (
    <ToDoContextProvider
      value={{
        tasks,
        addToDo,
        updateToDo,
        deleteToDo,
        toggleComplete,
      }}
    >
       <div className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDIwfHx8ZW58MHx8fHx8')" }}>

     <ToDoForm />
  <div className="flex flex-col items-center gap-y-3">
                        {/*Loop and Add TodoItem here */}
     {
      tasks.map((task) => (
        <div key={task.id}>
         <ToDoItems task={task} />
        </div>
      ))
     }
      </div>
  </div>
    </ToDoContextProvider>
  );
}

export default App;
