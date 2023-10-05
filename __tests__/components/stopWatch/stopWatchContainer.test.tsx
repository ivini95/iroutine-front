import StopwatchContainer from "@/app/components/stopWatch/stopWatchContainer"
import { render, screen } from "@testing-library/react"

describe('stop watch container', () => {

    it('should be redirect stop watch', () => {
        render(<StopwatchContainer/>)

        expect(screen.getByText('Description task')).toBeInTheDocument()

    })

})

//testar botão de pause/play

//testar tempo?