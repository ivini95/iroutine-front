export default function InfoStatusToday() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center p-2 justify-between h-20 w-80 border-current border rounded-lg box-border"><p>Total de Tarefas</p><span>03 / 20</span></div>
            <div className="flex items-center p-2 justify-between h-20 w-80 border-current border rounded-lg box-border"><p>Tempo a Cumprir</p><span>01 : 20</span></div>
            <div className="flex items-center p-2 justify-between h-20 w-80 border-current border rounded-lg box-border"><p>Tempo Decorrido</p><span>03 : 10</span></div>
        </div>
    )
}