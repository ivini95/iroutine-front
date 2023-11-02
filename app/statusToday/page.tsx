'use client';

import Link from 'next/link';
import { Button } from '../components/ui/button';
import InfoStatusToday from '../components/statusToday/infoStatusToday';
import BackPage from '../components/backPage';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StatusToday() {

  const router = useRouter()
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
  },[])

  
  function redirectToCreateTask() {
    
    router.push('/createTask')
  }

  return (
    tasks?.length < 1 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Button onClick={redirectToCreateTask} className="h-16 w-40 font-semibold text-sm shadow-tg">Criar Tarefa</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
          <BackPage />
          <InfoStatusToday />
          <Link href={'tasksToday'}>
            <Button className="h-16 w-40 font-semibold text-sm shadow-tg">
              TAREFAS
            </Button>
          </Link>
        </div>
      )
  )
}
