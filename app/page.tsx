import Link from 'next/link'
import {Button} from '../app/components/ui/button'


//adionar imagens para ilustrar funções
export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-12">
      <p>Iroutine é um gerenciador de tarefas em lista simples!</p>
      <p>Adicione tarefas a sua lista diaria de tarefas para melhor visualizar o que tem a fazer.</p>
      <p>Agende um tempo de conclusão ou contador para analise do tempo gasto durante seu dia.</p>
      <p>Função de cronometro e contador para tarefas fora da lista.</p>
      <Link href={'login'}><Button className="h-16 w-40 font-semibold text-sm">Login</Button></Link>
    </main>
  )
}
