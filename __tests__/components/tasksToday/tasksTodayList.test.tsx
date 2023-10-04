import TasksTodayList from "@/app/components/tasksTodayContainer/tasksTodayList"
import { render, screen } from "@testing-library/react"

describe('tasks today list', () => {

    it('should be defined', () => {
        render(<TasksTodayList/>)

        expect(screen.getByText('description of task')).toBeInTheDocument()
        expect(screen.getByText('Play/pause')).toBeInTheDocument()
    })

})