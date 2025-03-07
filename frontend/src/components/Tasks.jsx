function Tasks (props) {
    console.log(props)
    return(
        <div>
            <br />
            <h1>Tasks</h1>
            <br />
            <ul className="space-y-4 p-6 bg-[#EBE5C2] rounded-md shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex">
                        <button className="bg-[#B9B28A] text-[#504B38] p-2 rounded-md w-full">{task.title}</button>
                        <button className="bg-[#B9B28A] text-[#504B38] p-2 rounded-md">Ver Detalhes</button>
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default Tasks;