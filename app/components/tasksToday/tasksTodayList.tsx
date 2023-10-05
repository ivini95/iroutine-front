import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";


export default function TasksTodayList() {
    return (
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
            </div>
    )
}