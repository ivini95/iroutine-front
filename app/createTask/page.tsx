'use client'

import { useEffect, useState } from 'react';
import BackPage from '../components/backPage';
import DateSelect from '../components/createTask/dateSelect';
import DescriptionTask from '../components/createTask/descriptionTask';
import TypeOfTask from '../components/createTask/typeOfTask';
import WeekDaysSelect from '../components/createTask/weekDaysSelect';
import { Button } from '../components/ui/button';


export default function CreateTask() {

  const [daysSelected, setDaysSelected] = useState<any>({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  }) 

  const [descriptionTask, setDescriptionTask] = useState('')
  const [typeTask, setTypeTask] = useState()
  const [timeStopwatch, setTimeStopwatch] = useState()
  const [currentStartDate, setcurrentStartDate] = useState()
  const [currentEndDate, setCurrentEndDate] = useState()

  //data inicial não pode ser maior que data final
  //deve possuir pelo menos um dia marcado
  //deve possui descrição
  //deve possui tipo selecionado
  //caso tipo seja cronometro o tempo deve ser maior que zero

  useEffect(()=>{
    console.log(currentStartDate);
    console.log(currentEndDate);
    
  },[currentStartDate, currentEndDate])

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center mt-28 gap-8">
        <BackPage />
        <WeekDaysSelect setDaysSelected={setDaysSelected} daysSelected={daysSelected}/>
        <DescriptionTask setDescriptionTask={setDescriptionTask}/>
        <TypeOfTask setTypeTask={setTypeTask} setTimeStopwatch={setTimeStopwatch}/>
        <DateSelect setcurrentStartDate={setcurrentStartDate} setCurrentEndDate={setCurrentEndDate}/>
        <Button className="h-16 w-40 font-semibold text-sm shadow-tg">Criar</Button>
      </div>
    </div>
  );
}
