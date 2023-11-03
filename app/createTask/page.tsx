'use client';

import { useEffect, useState } from 'react';
import BackPage from '../components/backPage';
import DateSelect from '../components/createTask/dateSelect';
import DescriptionTask from '../components/createTask/descriptionTask';
import TypeOfTask from '../components/createTask/typeOfTask';
import WeekDaysSelect from '../components/createTask/weekDaysSelect';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';
import Cookie from 'js-cookie';

export default function CreateTask() {
  const [daysSelected, setDaysSelected] = useState<any>({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });

  const [descriptionTask, setDescriptionTask] = useState('');
  const [typeTask, setTypeTask] = useState(null);
  const [timeStopwatch, setTimeStopwatch] = useState(0);
  const [currentStartDate, setcurrentStartDate] = useState<string>();
  const [currentEndDate, setCurrentEndDate] = useState<string>();
  const [messageCreateTask, setMessageCreateTask] = useState<null | string>(
    null,
  );
  const [dataTaskStatus, setDataTaskStatus] = useState(false);

  //data inicial não pode ser maior que data final
  //deve possuir pelo menos um dia marcado
  //deve possui descrição
  //deve possui tipo selecionado
  //caso tipo seja cronometro o tempo deve ser maior que zero

  function verifyCreateTaskData() {
    let dayTrue = 0;
    let weekArray = Object.values(daysSelected);
    weekArray.forEach((day) => {
      if (day) {
        dayTrue += 1;
      }
    });

    if (dayTrue === 0) {
      setMessageCreateTask('Selecione pelo menos um dia da semana!');
    } else if (descriptionTask.length < 1) {
      setMessageCreateTask('Adicione uma descrição a tarefa!');
    } else if (!typeTask) {
      setMessageCreateTask('Selecione entre Cronometro ou Timer!');
    } else if (typeTask === 'stopwatch' && timeStopwatch < 1) {
      setMessageCreateTask('Adicione um tempo para a tarefa');
    } else if (!currentStartDate) {
      setMessageCreateTask('Selecione uma data para começar a tarefa.');
    } else if (currentEndDate) {
      const yearStart = Number(currentStartDate.slice(0, 4));
      const yearEnd = Number(currentEndDate.slice(0, 4));
      const monthStart = Number(currentStartDate.slice(5, 7));
      const monthEnd = Number(currentEndDate.slice(5, 7));
      const dayStart = Number(currentStartDate.slice(8, 10));
      const dayEnd = Number(currentEndDate.slice(8, 10));

      if (yearStart > yearEnd) {
        setMessageCreateTask(
          'A data de inicio da tarefa não pode ser maior que a data de fim!',
        );
      } else if (yearStart == yearEnd) {
        if (monthStart > monthEnd) {
          setMessageCreateTask(
            'A data de inicio da tarefa não pode ser maior que a data de fim!',
          );
        } else if (monthStart == monthEnd) {
          if (dayStart > dayEnd) {
            setMessageCreateTask(
              'A data de inicio da tarefa não pode ser maior que a data de fim!',
            );
          } else {
            setDataTaskStatus(true);
          }
        }
      }
    } else {
      setDataTaskStatus(true);
    }
    if (!messageCreateTask) {
      setTimeout(() => {
        setMessageCreateTask(null);
      }, 2000);
    }
  }

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
  const authToken = Cookie.get('auth_token');
  const userId = Cookie.get('user_id');

  const taskData: Itask = {
    description: descriptionTask,
    currentTime: 0,
    days: daysSelected,
    finish: currentEndDate,
    start: currentStartDate,
    status: 'initial',
    totalTime: timeStopwatch,
    type: typeTask,
    userId: userId,
  };

  async function postCreateTask() {
    const res = await fetch('http://localhost:3000/task', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    //console.log(await res.json());
  }

  useEffect(() => {
    if (dataTaskStatus) {
      [postCreateTask()];
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTaskStatus]);

  return (
    <div className="flex flex-col items-center h-screen">
      {messageCreateTask ? (
        <Alert className="h6 w-72 absolute z-10 top-14 left-1/2 transform -translate-x-1/2 bg-background text-primary border-primary">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Não foi possivel criar tarefa!</AlertTitle>
          <AlertDescription>{messageCreateTask}</AlertDescription>
        </Alert>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center mt-28 gap-8">
        <BackPage />
        <WeekDaysSelect
          setDaysSelected={setDaysSelected}
          daysSelected={daysSelected}
        />
        <DescriptionTask setDescriptionTask={setDescriptionTask} />
        <TypeOfTask
          setTypeTask={setTypeTask}
          setTimeStopwatch={setTimeStopwatch}
        />
        <DateSelect
          setcurrentStartDate={setcurrentStartDate}
          setCurrentEndDate={setCurrentEndDate}
        />
        <Button
          onClick={verifyCreateTaskData}
          className="h-16 w-40 font-semibold text-sm shadow-tg"
        >
          Criar
        </Button>
      </div>
    </div>
  );
}
