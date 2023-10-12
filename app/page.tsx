import Link from 'next/link'
import {Button} from '../app/components/ui/button'

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-12">
      <Link href={'profile'}><Button className="h-16 w-40 font-semibold text-sm">Login</Button></Link>
      <h1 className='font-semibold'>IROUTINE</h1>
    </main>
  )
}
