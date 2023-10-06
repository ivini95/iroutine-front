import BackPage from "../components/backPage";
import ListTaskManagement from "../components/listTask/listTaskManagement";

export default function ListTask() {
    return (
        <div  className="flex flex-col items-center h-screen ">
            <BackPage/>
            <ListTaskManagement/>
        </div>
    )
}