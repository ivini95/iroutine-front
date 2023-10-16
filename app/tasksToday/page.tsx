import Link from "next/link";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import TasksTodayList from "../components/tasksToday/tasksTodayList";
import BackPage from "../components/backPage";

export default function TasksToday() {
    return (
        <div className="flex flex-col items-center justify-between h-screen gap-8">
            <BackPage/>
            <TasksTodayList/>
            <div className="flex justify-center gap-4 w-72 mb-4">
                <Link href={'/stopwatch'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">CRONOMETRO</Button></Link>
                <Link href={'/timer'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">TEMPORIZADOR</Button></Link>
            </div>
        </div>
    )
}