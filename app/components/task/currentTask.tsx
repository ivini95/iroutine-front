import ChangePlayPauseButtonState from "@/app/utils/changePlayPauseButtonState";

export default function CurrentTask() {


    return (
        <div className="flex flex-col items-center justify-between p-4 h-72 w-64 absolute top-1/4 bg-primary rounded-lg">
            <div className="font-semibold">00 : 29 : 23</div>
            <p className="font-semibold">Description task</p>
            <ChangePlayPauseButtonState/>
        </div>
    )
}