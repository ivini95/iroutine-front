'use client'

import Link from "next/link";
import { Button } from "../components/ui/button";
import TasksTodayList from "../components/tasksToday/tasksTodayList";
import BackPage from "../components/backPage";
import Cookie from 'js-cookie'
import { useEffect, useState } from "react";

export default function TasksToday() {

    const [tasks, setTasks] = useState([])

    const userId = Cookie.get('user_id');
    const authToken = Cookie.get('auth_token');

    async function getTaskData() {
        const res = await fetch(`http://localhost:3000/task/${userId}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
        
          const taskData = await res.json();
          setTasks(taskData)
    }

  

  useEffect(() => {
    getTaskData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


    return (
        <div className="flex flex-col items-center justify-between h-screen gap-8">
            <BackPage/>
            <TasksTodayList tasks={tasks}/>
            <div className="flex justify-center gap-4 w-72 mb-4">
                <Link href={'/stopwatch'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">CRONOMETRO</Button></Link>
                <Link href={'/timer'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">TEMPORIZADOR</Button></Link>
            </div>
        </div>
    )
}