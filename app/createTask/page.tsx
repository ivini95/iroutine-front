import BackPage from '../components/backPage';
import DateSelect from '../components/createTask/dateSelect';
import DescriptionTask from '../components/createTask/descriptionTask';
import TypeOfTask from '../components/createTask/typeOfTask';
import WeekDaysSelect from '../components/createTask/weekDaysSelect';
import { Button } from '../components/ui/button';

export default function CreateTask() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center mt-28 gap-8">
        <BackPage />
        <WeekDaysSelect />
        <DescriptionTask />
        <TypeOfTask />
        <DateSelect />
        <Button className="h-16 w-40 font-semibold text-sm shadow-tg">Criar</Button>
      </div>
    </div>
  );
}
