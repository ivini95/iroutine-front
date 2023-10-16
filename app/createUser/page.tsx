import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function CreateUser() {
  return (
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <Input placeholder="Usuário" className="h-10 w-72 rounded-lg border-2 border-primary text-primary bg-transparent text-center"/>
        <Input placeholder="Senha" className="h-10 w-72 rounded-lg border-2 border-primary  text-primary bg-transparent text-center"/>
        <Input placeholder="Confirmar Senha" className="h-10 w-72 rounded-lg border-2 border-primary  text-primary bg-transparent text-center"/>
        <Button className="h-16 w-40 font-semibold text-sm">Criar</Button>

        <p className="text-xs">Possui conta? <Link className="text-primary decoration-primary" href={'login'}>Login.</Link></p>
      </div>
    </main>
  )
}
