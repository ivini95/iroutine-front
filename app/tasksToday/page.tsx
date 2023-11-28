'use client';

import Link from 'next/link';
import { Button } from '../components/ui/button';
import TasksTodayList from '../components/tasksToday/tasksTodayList';
import BackPage from '../components/backPage';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';

export default function TasksToday() {

  const [tasks, setTasks] = useState([]);
  
  const [currentTasks, setCurrentTasks] = useState<any>([]);

  const userId = Cookie.get('user_id');
  const authToken = Cookie.get('auth_token');

  async function getTaskData() {
    const res = await fetch(`http://localhost:3000/task/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const taskData = await res.json();
    setTasks(taskData);
    
    
  }

  useEffect(() => {
    getTaskData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      compareTodayData();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tasks])

  function compareTodayData() {
    
    const date = new Date();

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currenteDay = date.getDate();
    let currentTasks: any[] = [];

    tasks.forEach((task: any) => {
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

      if (yearTaskStart <= currentYear) {
        if (monthTaskStart <= currentMonth) {
          if (dayTaskStart <= currenteDay) {
            currentTasks.push(task);
          }
        }
      }

      //pegar data de inicio
      //separar por ano mês e dia
      // verificar se data de inicio é menor que ou iqual a data atual, caso true setar task no estado
      //pegar data final
      //separar por ano mês e dia
      //verificar se data final é maior ou igual data atual , caso true setar task no estado
      //verificar se a task possui o dia da semana marcado igual o dia atual
      //tratar data separando ano, mês e dia e realizar comparações
    });
   
    setCurrentTasks(currentTasks)
  }

  useEffect(() => {
    console.log(currentTasks);
    
  },[currentTasks])

  return (
    <div className="flex flex-col items-center justify-between h-screen gap-8">
      <BackPage />
      <TasksTodayList tasks={currentTasks} />
      <div className="flex justify-center gap-4 w-72 mb-4">
        <Link href={'/stopwatch'}>
          <Button className="h-16 w-40 font-semibold text-sm shadow-tg">
            CRONOMETRO
          </Button>
        </Link>
        <Link href={'/timer'}>
          <Button className="h-16 w-40 font-semibold text-sm shadow-tg">
            TEMPORIZADOR
          </Button>
        </Link>
      </div>
    </div>
  );
}
