import { useEffect, useState } from 'react';

interface Itask {
  description: string;
  currentTime: number;
  start: string | undefined;
  finish: string | undefined;
  status: string;
  totalTime: number;
  type: string | null;
  days: {
    sun: boolean;
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thu: boolean;
    fri: boolean;
    sat: boolean;
  };
  userId: string | undefined;
}

export default function InfoStatusToday(props: any) {
  const [tasks, setTasks] = useState<Itask[]>([]);

  useEffect(() => {
    setTasks(props.tasks);
  }, []);

  let totalTaskCompleted: string | number = 0;
  let totalTimeTask = 0;
  let elapsedTime = 0

  for (let index = 0; index < tasks.length; index++) {
    totalTimeTask = tasks[index].totalTime + totalTimeTask;
    elapsedTime = tasks[index].currentTime + elapsedTime;
    if (tasks[index].status === 'completed') {
      totalTaskCompleted += 1;
    }
  }

  let totalTask;

  if (props.tasks.length < 10) {
    totalTask = '0' + props.tasks.length;
    totalTaskCompleted = '0' + totalTaskCompleted;
  }else {
    totalTask = props.tasks.length;
    totalTaskCompleted = totalTaskCompleted;
  }

  //formatar tempo total
  
  function totalSecondsToString(seconds: number) {
    const hour = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const restSeconds = seconds % 60;

    const hourStr = hour.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = restSeconds.toString().padStart(2, '0');

    return `${hourStr}:${minutesStr}:${secondsStr}`;
  }

  const totalTimeFormated = totalSecondsToString(totalTimeTask)

  function currentSecondsToString(seconds: number) {
    const hour = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const restSeconds = seconds % 60;

    const hourStr = hour.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = restSeconds.toString().padStart(2, '0');

    return `${hourStr}:${minutesStr}:${secondsStr}`;
  }

  const leftTimeFormated = currentSecondsToString(totalTimeTask - elapsedTime)

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="bg-primary flex items-center p-2 justify-between h-20 w-80 rounded-lg shadow-tg text-sm">
        <p className="font-medium text-background">Total de Tarefas</p>
        <span className="font-medium text-background text-sm">
          {totalTaskCompleted} / {totalTask}
        </span>
      </div>
      <div className="bg-primary flex items-center p-2 justify-between h-20 w-80 rounded-lg shadow-tg text-sm">
        <p className="font-medium text-background">Tempo a Cumprir</p>
        <span className="font-medium text-background text-sm">{totalTimeFormated}</span>
      </div>
      <div className="bg-primary flex items-center p-2 justify-between h-20 w-80 rounded-lg shadow-tg text-sm">
        <p className="font-medium text-background">Tempo Restante</p>
        <span className="font-medium text-background text-sm">{leftTimeFormated}</span>
      </div>
    </div>
  );
}
