'use client';

import Link from 'next/link';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function TasksTodayList(props: any) {
  const [tasks, setTasks] = useState({});

  function convertSecondstoTime(secondsTask: number) {
    const dateObj = new Date(secondsTask * 1000);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');

    return timeString;
  }
  //verificar a data atual e retornar somente tasks de acordo com dia
  function compareTodayData() {
    const date = new Date();

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currenteDay = date.getDate();

    //console.log(currentYear);

    props.tasks.forEach((task: any) => {
      //console.log(task);

      let yearTaskStart = 0;
      let monthTaskStart = 0;
      let dayTaskStart = 0;

      yearTaskStart = Number(task.start.slice(0, 4));
      monthTaskStart = Number(task.start.slice(5, 7));
      dayTaskStart = Number(task.start.slice(8, 10));

      let yearTaskFinish = 0;
      let monthTaskFinish = 0;
      let dayTaskFinish = 0;

      yearTaskFinish = Number(task.finish.slice(0, 4));
      monthTaskFinish = Number(task.finish.slice(5, 7));
      dayTaskFinish = Number(task.finish.slice(8, 10));

      console.log(yearTaskFinish)
      //pegar data de inicio
      //separar por ano mês e dia
      // verificar se data de inicio é menor que ou iqual a data atual, caso true setar task no estado
      //pegar data final
      //separar por ano mês e dia
      //verificar se data final é maior ou igual data atual , caso true setar task no estado

      //tratar data separando ano, mês e dia e realizar comparações
    });

    //console.log(date);
  }

  compareTodayData();

  return (
    <div className="flex flex-col gap-2 h-80 mt-24">
      {props.tasks.map((task: any, index: number) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between shadow-tg w-84 h-20 bg-primary rounded-lg p-2"
        >
          <div className="flex w-full justify-between items-center h-6 ">
            <Checkbox className="w-5 h-5 bg-secondary/50 border-secondary border-2" />
            <div className="pl-10 text-secondary font-semibold text-sm">
              {task.type === 'timer'
                ? 'Timer'
                : convertSecondstoTime(task.currentTime)}
            </div>
            <Link href={'/task'} data-testid="startTaskToday">
              <Button className="h-6 w-12 ml-4 bg-secondary hover-bg-secondary/80 shadow-tg">
                <Play size={16} />
              </Button>
            </Link>
          </div>
          <div className="flex w-full items-center justify-center p-1">
            <p className="font-semibold text-sm">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
