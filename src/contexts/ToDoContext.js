import { createContext, useContext} from "react";

export const ToDoContext = createContext({
    tasks: [
      {
        id: 1,
        task: "Sample Task",
        completed: false
      }
    ],
    addToDo:(task)=> {},
    updateToDo:(taskId, updatedTask)=> {},
    deleteToDo:(taskId)=> {},
    toggleComplete:(taskId)=> {}
});

export const useToDoContext = () => {
  return useContext(ToDoContext);
};

export const ToDoContextProvider = ToDoContext.Provider;