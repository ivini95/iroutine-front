import DateSelect from '../components/createTask/dateSelect';
import DescriptionTask from '../components/createTask/descriptionTask';
import TypeOfTask from '../components/createTask/typeOfTask';
import WeekDaysSelect from '../components/createTask/weekDaysSelect';
import { Button } from '../components/ui/button';

export default function CreateTask() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center mt-28 gap-8">
        <WeekDaysSelect />
        <DescriptionTask />
        <TypeOfTask />
        <DateSelect />
        <Button>Criar</Button>
      </div>
    </div>
  );
}
