'use client'

import Link from 'next/link';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Play } from 'lucide-react';
export default function TasksTodayList(props: any) {

  console.log(props.tasks);
  
  //verificar a data atual e retornar somente tasks de acordo com dia
  //verificar o tipo da task, caso seja timer mostrar timer, caso contrario mostrar tempo
  //tratar tempo

  return (
    <div className="flex flex-col gap-2 h-80 mt-24">
      {props.tasks.map((task: any, index: number) => (
        <div key={index} className="flex flex-col items-center justify-between shadow-tg w-84 h-20 bg-primary rounded-lg p-2">
          <div className="flex w-full justify-between items-center h-6 ">
            <Checkbox className='w-5 h-5 bg-secondary/50 border-secondary border-2'/>
            <div className="pl-8 text-secondary font-semibold text-sm">00 : 00 : 00</div>
            <Link href={'/task'} data-testid="startTaskToday">
              <Button className="h-6 w-12 ml-4 bg-secondary hover-bg-secondary/80 shadow-tg">
                <Play size={16} />
              </Button>
            </Link>
          </div>
          <div className="flex w-full items-center justify-center p-1">
            <p className='font-semibold text-sm'>{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
