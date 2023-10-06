import Link from "next/link";
import { Button } from "../components/ui/button";
import InfoStatusToday from "../components/statusToday/infoStatusToday";
import BackPage from "../components/backPage";

export default function StatusToday() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
            <BackPage/>
            <InfoStatusToday/>
            <Link href={'tasksToday'}><Button>TAREFAS</Button></Link>
        </div>
    )
}