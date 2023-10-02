import { Checkbox } from "../components/ui/checkbox"

export default function CreateTask() {
    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <div className="flex flex-col items-center mt-28">
                <div className="flex gap-3">
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">D</span></div>
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">S</span></div>
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">T</span></div>
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1">Q</span></div>
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1">Q</span></div>
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">S</span></div>
                    <div className="flex w-6 h-6 relative"><Checkbox className="absolute w-5 h-5"></Checkbox><span className="h-4 w-4 leading-6 ml-1.5">S</span></div>
                </div>
                <input type="text" name="description" id="description" placeholder="Descrição" />
                <div>
                    <input type="checkbox" name="stopwatch" id="stopwatch" />
                    <label htmlFor="stopwatch">Cronometro</label>
                    <input type="time" name="stopwatchTime" id="stopwatchTime" />
                </div>
                <div>
                    <input type="checkbox" name="timer" id="timer" />
                    <label htmlFor="timer">Temporizador</label>
                </div>
                <div>
                    <label htmlFor="startTask">INICIO</label>
                    <input type="date" name="startTask" id="startTask" />
                </div>
                <div>
                    <input type="checkbox" name="endTask" id="endTask" />
                    <label htmlFor="">FIM</label>
                    <input type="date" name="endTask" id="endTask" />
                </div>
            </div>
            <button>ADICIONAR</button>
        </div>
    )
}