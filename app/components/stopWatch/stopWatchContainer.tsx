import { Button } from "../ui/button";

export default function StopwatchContainer() {
    return (
            <div className="flex flex-col items-center justify-around p-4 h-80 w-64 absolute top-1/4 border rounded-lg">
            <div>00 : 23 : 02</div>
                <p>Description task</p>
                <Button className='h-6 w-12'>Pause/Play</Button>
            </div>
    )
}