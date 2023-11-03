'use client';

import { CalendarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import * as React from 'react';

export default function DateSelect(props: any) {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  function formatStartData() {
    if(startDate){
      const stringDate = startDate?.toString()
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
    if(endDate){
      const stringDate = endDate?.toString()
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
  },[startDate])

  React.useEffect(() => {
    props.setCurrentEndDate(formatEndData())
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[endDate])

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !startDate && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? format(startDate, 'PPP') : <span>Data de Inicio</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
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
              !endDate && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {endDate ? format(endDate, 'PPP') : <span>Data de Fim</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
