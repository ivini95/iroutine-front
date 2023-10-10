'use client'
import { usePathname, useRouter,  } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackPage() {
  const router = useRouter();
  let pathname = usePathname()

  let titleParts = pathname.split('/')

  titleParts.shift()

  let titleTogether = titleParts[0][0].toUpperCase() + titleParts[0].slice(1);

  let title = titleTogether.replace(/([a-z])([A-Z])/g, '$1 $2');  
  
  return (
    <div className='flex items-center w-full absolute top-12'>
      <Button className='h-6 w-12 ml-4' type="button" onClick={() => router.back()}>
        <ArrowLeft size={16}/>
      </Button>
      <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{title}</h2>
    </div>
  );
}
