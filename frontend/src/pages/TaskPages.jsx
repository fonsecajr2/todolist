import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return(
        <div className="w-screen h-screen bg-[#F8F3D9] flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-[#B9B28A] font-bold text-center">Tasks Detais</h1>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p> 
                </div>
            </div>
        </div>
    )
}
// Fonseca Junior Copy Rights

export default TaskPage;