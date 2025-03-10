import {ChevronRightIcon} from "lucide-react";
import { TrashIcon } from "lucide-react";
import clsx from "clsx";

function Tasks (props) {
    console.log(props)

    function onTaskClick(taskId){
        if (!props.tasks || !Array.isArray(props.tasks)) {
            console.error("Erro: props.tasks não está definido ou não é um array.");
            return;
        }

        const newTasks = props.tasks.map(task => {
            if (task.id === taskId){
                return {...task, isCompleted: !task.isCompleted}
            }else{
                return task
            }
        });

        props.setTasks(newTasks);
    }

    function deleteTaskClick(taskID){
        if (!props.tasks || !Array.isArray(props.tasks)) {
            console.error("Tasks")
        }
        const newTasks = props.tasks.filter(task => task.id !== taskID);
        console.log("Task Deleted");

        props.setTasks(newTasks);
    }   

    return (
        <div>
            <br />
            <h1>Tasks</h1>
            <br />
            <ul className="space-y-4 p-6 bg-[#EBE5C2] rounded-md shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button  onClick= {() => onTaskClick(task.id)}
                            className={clsx(
                                "text-left bg-[#B9B28A] text-[#504B38] p-2 rounded-md w-full",
                                task.isCompleted && "line-through"
                            )} >
                                {task.title}
                        </button>
                        <button className="bg-[#B9B28A] text-[#504B38] p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button className="bg-[#B9B28A] text-[#504B38] p-2 rounded-md" onClick={() => deleteTaskClick(task.id)}>
                            <TrashIcon />
                        </button>
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default Tasks;