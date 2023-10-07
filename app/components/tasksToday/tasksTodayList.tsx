import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";


export default function TasksTodayList() {
    return (
        <div className="flex flex-col gap-2 h-80 mt-24">
                <div className="flex flex-col items-center justify-between w-84 h-20 border rounded-lg p-2">
                    <div className="flex w-full justify-between items-center h-6 ">
                        <Checkbox/>
                        <div className="pt-2">00 : 30 : 00</div>
                        <Link href={'/task'} data-testid="startTaskToday"><Button className='h-6 w-12 ml-4'>Play</Button></Link>
                    </div>
                    <div className="flex w-full items-center justify-center p-1">
                        <p>description of task</p>
                    </div>
                </div>
            </div>
    )
}