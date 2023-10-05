import CurrentTask from "@/app/components/task/currentTask"
import { render, screen } from "@testing-library/react"

describe('current task', () => {

    it('should be redirect task', () => {
        render(<CurrentTask/>)

        expect(screen.getByText('Description task')).toBeInTheDocument()

    })

})

//testar botão de pause/play

//testar botão de concluir

//testar tempo?