import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";

export default function TypeOfTask(props: any) {

  
  

  function changeTypeTaskSelect(checked : any, checkType: string){
    
    if(checkType === 'stopwatch'){
      if(checked){
        props.setCurrentStopwatchState(true)
        props.setCurrentTimerState(false)
   
        props.setTypeTask('stopwatch')
      }
    }else if(checkType === 'timer'){
      if(checked){
        props.setCurrentTimerState(true)
        props.setCurrentStopwatchState(false)
        props.setCurrentStopwatchTime('00:00')
        props.setTypeTask('timer')
      }
  }
  
  }

  useEffect(() => {

    const stringTask = props.currentStopwatchTime
    const splitStringTask = stringTask.split(':')
    const hourTaskString = splitStringTask[0]
    const minutesTaskString = splitStringTask[1]
    const hourTask = Number(hourTaskString)
    const minuteTask = Number(minutesTaskString)
    const totalTimeTaskInSeconds = (hourTask * 3600) + (minuteTask * 60)
    props.setTimeStopwatch(totalTimeTaskInSeconds)
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.currentStopwatchTime])

  

  return (
    <div className="flex w-80 justify-between pr-4 pl-4">
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <Checkbox checked={props.currentStopwatchState} id="stopwatch" onCheckedChange={(checked) => changeTypeTaskSelect(checked, 'stopwatch')}/>
          <label className="font-semibold text-sm" htmlFor="stopwatch">Cronometro</label>
        </div>
        <input value={props.currentStopwatchTime} onChange={(e : any) => props.setCurrentStopwatchTime(e.target.value)} disabled={!props.currentStopwatchState} className="w-full pl-3 pt-0.5 rounded-lg border bg-transparent" type="time" name="stopwatchTime" id="stopwatchTime" />
      </div>
      <div className="flex gap-4 items-center h-6 ">
        <Checkbox checked={props.currentTimerState} id='timer' onCheckedChange={(checked) => changeTypeTaskSelect(checked, 'timer')}/>
        <label className="font-semibold text-sm"  htmlFor="timer">Temporizador</label>
      </div>
    </div>
  );
}
