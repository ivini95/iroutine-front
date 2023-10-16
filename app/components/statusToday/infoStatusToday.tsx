export default function InfoStatusToday() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-primary flex items-center p-2 justify-between h-20 w-80 rounded-lg shadow-tg text-sm"><p className="font-medium text-background">Total de Tarefas</p><span className="font-medium text-background text-sm">03 / 20</span></div>
            <div className="bg-primary flex items-center p-2 justify-between h-20 w-80 rounded-lg shadow-tg text-sm"><p className="font-medium text-background">Tempo a Cumprir</p><span className="font-medium text-background text-sm">01 : 20</span></div>
            <div className="bg-primary flex items-center p-2 justify-between h-20 w-80 rounded-lg shadow-tg text-sm"><p className="font-medium text-background">Tempo Decorrido</p><span className="font-medium text-background text-sm">03 : 10</span></div>
        </div>
    )
}