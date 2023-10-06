import DateSelect from '../components/editTask/dateSelect';
import DescriptionTask from '../components/editTask/descriptionTask';
import TypeOfTask from '../components/editTask/typeOfTask';
import WeekDaysSelect from '../components/editTask/weekDaysSelect';
import { Button } from '../components/ui/button';

export default function EditTask() {
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
