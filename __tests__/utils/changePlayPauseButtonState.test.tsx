import ChangePlayPauseButtonState from "@/app/utils/changePlayPauseButtonState"
import { fireEvent, getByRole, render, screen } from "@testing-library/react"

describe('play / pause button', () => {

    
    it('should render button', () => {
        render(<ChangePlayPauseButtonState/>)
        const buttonPlayPause = screen.getByRole('button')
        expect(buttonPlayPause).toBeInTheDocument()
    })

    it('should change the button state between play and pause', () => {
        render(<ChangePlayPauseButtonState/>)
        const buttonPlayPause = screen.getByRole('button')
        fireEvent.click(buttonPlayPause)
        expect(screen.getByTestId('pause')).toBeInTheDocument()
        fireEvent.click(buttonPlayPause)
        expect(screen.getByTestId('play')).toBeInTheDocument()
    })
})