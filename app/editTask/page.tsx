import BackPage from '../components/backPage';
import DateSelect from '../components/editTask/dateSelect';
import DescriptionTask from '../components/editTask/descriptionTask';
import TypeOfTask from '../components/editTask/typeOfTask';
import WeekDaysSelect from '../components/editTask/weekDaysSelect';
import { Button } from '../components/ui/button';

export default function EditTask() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center mt-28 gap-8">
        <BackPage />
        <WeekDaysSelect />
        <DescriptionTask />
        <TypeOfTask />
        <DateSelect />
        <div className="flex justify-center gap-4 w-72 mb-4">
          <Button className="h-16 w-40 font-semibold text-sm shadow-tg">Remover</Button>
          <Button className="h-16 w-40 font-semibold text-sm shadow-tg">Concluir</Button>
        </div>
      </div>
    </div>
  );
}
