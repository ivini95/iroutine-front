import Link from 'next/link';
import { Button } from '../ui/button';
import { PenSquare } from 'lucide-react';

export default function ListTaskManagement() {
  return (
    <div className="flex flex-col items-center mt-28 gap-8">
      <div className="flex flex-col items-center justify-between w-84 h-20 border p-2 rounded-lg">
        <div className='flex items-center justify-between w-full'>
          <p>00 : 30 : 00</p>
          <Link href={'editTask'}>
            <Button className='h-6 w-12' data-testid="editTask"><PenSquare size={16}/></Button>
          </Link>
        </div>
        <p className="flex w-full items-center justify-center p-1">Description task</p>
      </div>
    </div>
  );
}
