import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(()=> {
    console.log("task changed")
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen bg-[#F8F3D9] flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-[#B9B28A] font-bold text-center">To Do App</h1>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;