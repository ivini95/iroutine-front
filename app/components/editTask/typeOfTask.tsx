export default function TypeOfTask() {
  return (
    <div className="flex w-80 justify-between pr-4 pl-4">
      <div className="flex flex-col">
        <div className="flex gap-4">
          <input type="checkbox" name="stopwatch" id="stopwatch" />
          <label className="mt-1" htmlFor="stopwatch">Cronometro</label>
        </div>
        <input className="w-20 ml-7 pl-3 pt-0.5 rounded-2xl bg-transparent" type="time" name="stopwatchTime" id="stopwatchTime" />
      </div>
      <div className="flex gap-4 items-center h-6 ">
        <input type="checkbox" name="timer" id="timer" />
        <label className="mt-1" htmlFor="timer">Temporizador</label>
      </div>
    </div>
  );
}
