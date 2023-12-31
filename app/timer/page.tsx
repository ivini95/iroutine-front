import BackPage from "../components/backPage";
import TimerContainer from "../components/timer/timerContainer";

export default function Timer() {
    return (
        <div className="flex flex-col justify-end items-center h-screen relative">
            <BackPage/>
            <TimerContainer/>
        </div>
    )
}