import BackPage from "../components/backPage";
import StopwatchContainer from "../components/stopWatch/stopWatchContainer";

export default function Stopwatch() {
    return (
        <div className="flex flex-col justify-end items-center h-screen relative">
            <BackPage/>
            <StopwatchContainer/>
        </div>
    )
}