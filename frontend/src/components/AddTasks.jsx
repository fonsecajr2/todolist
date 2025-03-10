import { useState } from "react";

function AddTask(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function onAddTaskSubmit(title, description){
        const newTask = {
            id: props.tasks.length + 1,
            title: title,
            description: description,
            isComplete: false,
        };

        props.setTasks([...props.tasks, newTask]);
    }

    return (
        <div className="space-y-4 p-6 bg-[#EBE5C2] rounded-md  flex flex-col  overflow-hidden">
            <h1>AddTask</h1>
            <input  type="text" placeholder="Task Title" className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Task Description " className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="bg-[#B9B28A] flex text-center w-20 rounded justify-center items-center" 
            onClick={() =>{ 
                if (!title.trim() || !description.trim()) {
                    return alert("Please fill in both fields");
                }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
            }}>Add Task</button>
        </div>
    )
}

export default AddTask;