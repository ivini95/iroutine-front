import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";

export default function TypeOfTask(props: any) {

  const [currentTimerState, setCurrentTimerState] = useState(false)
  const [currentStopwatchState, setCurrentStopwatchState] = useState(false)
  const [currentStopwatchTime, setCurrentStopwatchTime] = useState<any>('00:00')

  function changeTypeTaskSelect(checked : any, checkType: string){
    
    if(checkType === 'stopwatch'){
      if(checked){
        setCurrentStopwatchState(true)
        setCurrentTimerState(false)
   
        props.setTypeTask('stopwatch')
      }
    }else if(checkType === 'timer'){
      if(checked){
        setCurrentTimerState(true)
        setCurrentStopwatchState(false)
        setCurrentStopwatchTime('00:00')
        props.setTypeTask('timer')
      }
  }
  
  }

  useEffect(() => {

    const stringTask = currentStopwatchTime
    const splitStringTask = stringTask.split(':')
    const hourTaskString = splitStringTask[0]
    const minutesTaskString = splitStringTask[1]
    const hourTask = Number(hourTaskString)
    const minuteTask = Number(minutesTaskString)
    const totalTimeTaskInSeconds = (hourTask * 3600) + (minuteTask * 60)
    props.setTimeStopwatch(totalTimeTaskInSeconds)
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentStopwatchTime])

  

  return (
    <div className="flex w-80 justify-between pr-4 pl-4">
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <Checkbox checked={currentStopwatchState} id="stopwatch" onCheckedChange={(checked) => changeTypeTaskSelect(checked, 'stopwatch')}/>
          <label className="font-semibold text-sm" htmlFor="stopwatch">Cronometro</label>
        </div>
        <input value={currentStopwatchTime} onChange={(e : any) => setCurrentStopwatchTime(e.target.value)} disabled={!currentStopwatchState} className="w-full pl-3 pt-0.5 rounded-lg border bg-transparent" type="time" name="stopwatchTime" id="stopwatchTime" />
      </div>
      <div className="flex gap-4 items-center h-6 ">
        <Checkbox checked={currentTimerState} id='timer' onCheckedChange={(checked) => changeTypeTaskSelect(checked, 'timer')}/>
        <label className="font-semibold text-sm"  htmlFor="timer">Temporizador</label>
      </div>
    </div>
  );
}
