import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const navigate = useNavigate();

    return(
        <div className="w-screen h-screen bg-[#F8F3D9] flex justify-center p-6 relative">
            <div className="w-[500px] space-y-4">
                <button className="absolute left-5 top-5 text-[#504B8]" onClick={() => navigate(-1)}>
                    <ChevronLeftIcon/>
                </button>
                <h1 className="text-3xl text-[#B9B28A] font-bold text-center">Tasks Detais</h1>
                <div className="space-y-4 p-6 bg-[#EBE5C2] rounded-md">
                    <div className="bg-[#B9B28A] text-[#504B38] p-2 rounded-md">
                        <h2 className="text-center text-lg font-bold">Title:</h2>
                        <p>{title}</p>
                        <h2 className="text-center text-1xl font-bold">Description: </h2> 
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// Fonseca Junior Copy Rights

export default TaskPage;