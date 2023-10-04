import Link from "next/link";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import TasksTodayList from "../components/tasksTodayContainer/tasksTodayList";

export default function TasksToday() {
    return (
        <div className="flex flex-col items-center justify-between h-screen gap-8">
            <TasksTodayList/>
            <div className="flex justify-center gap-4 w-72 mb-4">
                <Link href={'/stopwatch'}><Button>CRONOMETRO</Button></Link>
                <Link href={'/timer'}><Button>TEMPORIZADOR</Button></Link>
            </div>
            
        </div>
    )
}