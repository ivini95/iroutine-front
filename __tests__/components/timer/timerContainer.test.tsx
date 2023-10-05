import TimerContainer from "@/app/components/timer/timerContainer"
import { render, screen } from "@testing-library/react"

describe('timer container', () => {

    it('should be redirect timer', () => {
        render(<TimerContainer/>)

        expect(screen.getByText('Description task')).toBeInTheDocument()

    })

})

//testar botão de pause/play

//testar tempo?