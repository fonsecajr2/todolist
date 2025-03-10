import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    isCompleted: false,
  },
  {
    id : 2,
    title: "Task 2",
    description: "This is task 2",
    isCompleted: false,
  }]);

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