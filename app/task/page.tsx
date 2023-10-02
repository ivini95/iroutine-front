import { Button } from "../components/ui/button";

export default function TasksToday() {
    return (
        <div className="flex flex-col justify-end items-center h-screen relative">
            <div className="flex flex-col items-center justify-around p-4 h-80 w-64 absolute top-1/4">
                <div>TIME</div>
                <p>Description task</p>
                <Button>Pause/Play</Button>
            </div>
            <Button className="mb-4">CONCLUIR</Button>
        </div>
    )
}