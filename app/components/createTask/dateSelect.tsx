'use client';

import { CalendarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import * as React from 'react';

export default function DateSelect(props: any) {
  

  function formatStartData() {
    if(props.startDate){
      const stringDate = props.startDate?.toString()
      const splitDate = stringDate?.split(' ')
      const year = splitDate?.slice(3, 4)
      const day = splitDate?.slice(2, 3)
      const monthAbrev : any = splitDate?.slice(1,2)
      const monthAbrevString : string = monthAbrev[0].toLowerCase()
      let monthNumber = '';
      
      switch (monthAbrevString) {
        case "jan":
          monthNumber = '1';
          break;
        case "feb":
          monthNumber = '2';
          break;
        case "mar":
          monthNumber = '3';
          break;
        case "apr":
          monthNumber = '4';
          break;
        case "may":
          monthNumber = '5';
          break;
        case "jun":
          monthNumber = '6';
          break;
        case "jul":
          monthNumber = '7';
          break;
        case "aug":
          monthNumber = '8';
          break;
        case "sep":
          monthNumber = '9';
          break;
        case "oct":
          monthNumber = '10';
          break;
        case 'nov':
          monthNumber = '11';
          break;
        case "dec":
          monthNumber = '12';
          break;
      }
      return year + '-' + monthNumber + '-' + day + 'T11:11:11.111Z'
      
      
    }
  }

  function formatEndData() {
    if(props.endDate){
      const stringDate = props.endDate?.toString()
      const splitDate = stringDate?.split(' ')
      const year = splitDate?.slice(3, 4)
      const day = splitDate?.slice(2, 3)
      const monthAbrev : any = splitDate?.slice(1,2)
      const monthAbrevString : string = monthAbrev[0].toLowerCase()
      let monthNumber = '';
      
      switch (monthAbrevString) {
        case "jan":
          monthNumber = '1';
          break;
        case "feb":
          monthNumber = '2';
          break;
        case "mar":
          monthNumber = '3';
          break;
        case "apr":
          monthNumber = '4';
          break;
        case "may":
          monthNumber = '5';
          break;
        case "jun":
          monthNumber = '6';
          break;
        case "jul":
          monthNumber = '7';
          break;
        case "aug":
          monthNumber = '8';
          break;
        case "sep":
          monthNumber = '9';
          break;
        case "oct":
          monthNumber = '10';
          break;
        case 'nov':
          monthNumber = '11';
          break;
        case "dec":
          monthNumber = '12';
          break;
      }
      return year + '-' + monthNumber + '-' + day + 'T11:11:11.111Z'
      
      
    }
  }

  React.useEffect(() => {

    props.setcurrentStartDate(formatStartData())

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.startDate])

  React.useEffect(() => {
    props.setCurrentEndDate(formatEndData())
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.endDate])

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !props.startDate && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {props.startDate ? format(props.startDate, 'PPP') : <span>Data de Inicio</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={props.startDate}
            onSelect={props.setStartDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !props.endDate && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {props.endDate ? format(props.endDate, 'PPP') : <span>Data de Fim</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={props.endDate}
            onSelect={props.setEndDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
