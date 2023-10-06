import Link from 'next/link';
import { Button } from '../ui/button';

export default function ListTaskManagement() {
  return (
    <div className="flex flex-col items-center mt-28 gap-8">
      <div className="flex flex-col items-center justify-between w-80 h-20 bg-slate-300 p-2 rounded-2xl">
        <div className='flex items-center justify-between w-full'>
          <p>00 : 30 : 00</p>
          <Link href={'editTask'}>
            <Button className='w-12 h-6' data-testid="editTask">Edit</Button>
          </Link>
        </div>
        <p>Description task</p>
      </div>
    </div>
  );
}
