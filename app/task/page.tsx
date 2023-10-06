import Link from "next/link";
import CurrentTask from "../components/task/currentTask";
import { Button } from "../components/ui/button";
import BackPage from "../components/backPage";

export default function Task() {
    return (
        <div className="flex flex-col justify-end items-center h-screen relative">
            <BackPage/>
            <CurrentTask/>
            <Link href={'tasksToday'}><Button className="mb-4" data-testid="completedTaskBtn">CONCLUIR</Button></Link>
        </div>
    )
}