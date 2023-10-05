import { Button } from "../ui/button";

export default function TimerContainer() {
    return (
        <div className="flex flex-col items-center justify-around p-4 h-80 w-64 absolute top-1/4">
            <div>00 : 23 : 02</div>
            <p>Description task</p>
            <Button>Pause/Play</Button>
        </div>
    )
}