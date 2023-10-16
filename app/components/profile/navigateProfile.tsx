import Link from "next/link";
import { Button } from "../ui/button";

export default function NavigateProfile() {
    return(
        <div className="flex flex-col gap-4">
          <Link href={'/statusToday'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">COMEÇAR</Button></Link>
          <Link href={'/createTask'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">CRIAR TAREFA</Button></Link>
          <Link href={'/listTask'}><Button className="h-16 w-40 font-semibold text-sm shadow-tg">GERENCIAR</Button></Link>
        </div>
    )
}