import CurrentTask from "../components/task/currentTask";
import { Button } from "../components/ui/button";

export default function Task() {
    return (
        <div className="flex flex-col justify-end items-center h-screen relative">
            <CurrentTask/>
            <Button className="mb-4">CONCLUIR</Button>
        </div>
    )
}