import { Pause, Play } from "lucide-react";
import { Button } from "../ui/button";

export default function CurrentTask() {
    return (
        <div className="flex flex-col items-center justify-between p-4 h-72 w-64 absolute top-1/4 border rounded-lg">
            <div>00 : 29 : 23</div>
            <p>Description task</p>
            <Button className='h-6 w-12'><Play size={14}/>/<Pause size={14}/></Button>
        </div>
    )
}