export default function EditTask() {
    return (
        <div>
            <div>
                <div>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
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
            <div>
                <button>REMOVER</button>
                <button>CONCLUIR</button>
            </div>
        </div>
    )
}