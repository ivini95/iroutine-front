import Link from "next/link";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2>Olá<span> Vinicius</span>!</h2>
          <p>Boa noite.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Link href={'/statusToday'}><Button>COMEÇAR</Button></Link>
          <Link href={'/createTask'}><Button>CRIAR TAREFA</Button></Link>
          <Link href={'/management'}><Button>GERENCIAR</Button></Link>
        </div>
      </div>
    </main>
  )
}
