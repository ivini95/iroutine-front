'use client'
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackPage() {
  const router = useRouter();
  return (
    <div className='flex items-center w-full absolute top-12'>
      <Button className='h-6 w-12 ml-4' type="button" onClick={() => router.back()}>
        <ArrowLeft className='h-4'/>
      </Button>
      <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>page tittle</h2>
    </div>
  );
}
