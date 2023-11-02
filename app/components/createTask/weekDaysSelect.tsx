'use client'

import { Checkbox } from '../ui/checkbox';

export default function WeekDaysSelect(props: any) {

  return (
    <div  className="flex gap-3">
    
      <div  data-testid="Sunday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, sun: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1 font-semibold">D</span>
      </div>
      <div data-testid="Monday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, mon: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1.5 font-semibold">S</span>
      </div>
      <div data-testid="Tuesday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, tue: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1.5 font-semibold">T</span>
      </div>
      <div data-testid="Wednesday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, wed: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1 font-semibold">Q</span>
      </div>
      <div data-testid="Thursday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, thu: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1 font-semibold">Q</span>
      </div>
      <div data-testid="Friday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, fri: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1.5 font-semibold">S</span>
      </div>
      <div data-testid="Saturday" className="flex w-6 h-6 relative">
        <Checkbox onCheckedChange={(checked) =>{ props.setDaysSelected({...props.daysSelected, sat: checked})
        }} className="absolute w-5 h-5 border-2"></Checkbox>
        <span className="h-4 w-4 leading-5 ml-1.5 font-semibold">S</span>
      </div>
    </div>
  );
}
