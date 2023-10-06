import Link from "next/link";
import { Button } from "../ui/button";

export default function NavigateProfile() {
    return(
        <div className="flex flex-col gap-4">
          <Link href={'/statusToday'}><Button>COMEÇAR</Button></Link>
          <Link href={'/createTask'}><Button>CRIAR TAREFA</Button></Link>
          <Link href={'/listTask'}><Button>GERENCIAR</Button></Link>
        </div>
    )
}