import { Checkbox } from "../ui/checkbox";

export default function TypeOfTask() {
  return (
    <div className="flex w-80 justify-between pr-4 pl-4">
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <Checkbox/>
          <label className="font-semibold text-sm" htmlFor="stopwatch">Cronometro</label>
        </div>
        <input className="w-full pl-3 pt-0.5 rounded-lg border bg-transparent" type="time" name="stopwatchTime" id="stopwatchTime" />
      </div>
      <div className="flex gap-4 items-center h-6 ">
        <Checkbox/>
        <label className="font-semibold text-sm"  htmlFor="timer">Temporizador</label>
      </div>
    </div>
  );
}
