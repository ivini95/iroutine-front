import StopwatchContainer from "@/app/components/stopWatch/stopWatchContainer"
import { render, screen } from "@testing-library/react"

describe('stop watch container', () => {

    it('should be defined stop watch', () => {
        render(<StopwatchContainer/>)

        expect(screen.getByText('Description task')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

})

//testar botão de pause/play changer

//testar tempo?