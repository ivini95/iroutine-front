export default function InfoStatusToday() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex justify-between w-72"><p>Total de Tarefas</p><span>03 / 20</span></div>
            <div className="flex justify-between w-72"><p>Tempo a Cumprir</p><span>01 : 20</span></div>
            <div className="flex justify-between w-72"><p>Tempo Decorrido</p><span>03 : 10</span></div>
        </div>
    )
}