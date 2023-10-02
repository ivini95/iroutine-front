import Link from "next/link";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";

export default function TasksToday() {
    return (
        <div className="flex flex-col items-center justify-between h-screen gap-8">
            <div className="flex flex-col gap-2 h-80 mt-16">
                <div className="flex flex-col items-center justify-between w-72 h-28">
                    <div className="flex w-full justify-between p-1">
                        <Checkbox/>
                        <div>00 : 30 : 00</div>
                    </div>
                    <div className="flex w-full items-center justify-between p-1">
                        <p>description of task</p>
                        <Link href={'/task'}><Button className="w-16 h-8">Play/pause</Button></Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between w-72 h-28">
                    <div className="flex w-full justify-between p-1">
                        <Checkbox/>
                        <div>00 : 30 : 00</div>
                    </div>
                    <div className="flex w-full items-center justify-between p-1">
                        <p>description of task</p>
                        <Button className="w-16 h-8">Play/pause</Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 w-72 mb-4">
                <Link href={'/stopwatch'}><Button>CRONOMETRO</Button></Link>
                <Link href={'/timer'}><Button>TEMPORIZADOR</Button></Link>
            </div>
            
        </div>
    )
}