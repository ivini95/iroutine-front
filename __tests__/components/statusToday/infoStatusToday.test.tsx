import InfoStatusToday from "@/app/components/statusToday/infoStatusToday"
import { render, screen } from "@testing-library/react"

describe('info status today', () => {

    it('should be redirect status', () => {
        render(<InfoStatusToday/>)

        expect(screen.getByText('Total de Tarefas')).toBeInTheDocument()
        expect(screen.getByText('Tempo a Cumprir')).toBeInTheDocument()
        expect(screen.getByText('Tempo Decorrido')).toBeInTheDocument()
    })

    it('should be show info of status of task today', () => {
        render(<InfoStatusToday/>)

        expect(screen.getByText('03 / 20')).toBeInTheDocument()
        expect(screen.getByText('01 : 20')).toBeInTheDocument()
        expect(screen.getByText('03 : 10')).toBeInTheDocument()
    })
})

//testar botão