import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Login() {
  return (
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <Input data-testid="userInput" placeholder="Usuário" className="h-10 w-72 rounded-lg border-2 border-primary text-primary bg-transparent text-center"/>
        <Input data-testid="passwordInput" placeholder="Senha" className="h-10 w-72 rounded-lg border-2 border-primary  text-primary bg-transparent text-center"/>
        <Link href={'profile'}><Button className="h-16 w-40 font-semibold text-sm">Login</Button></Link>

        <p className="text-xs">Não possui conta? <Link data-testid='createUserLink' className="text-primary decoration-primary" href={'createUser'}>Criar.</Link></p>
      </div>
    </main>
  )
}
