import TasksTodayList from "@/app/components/tasksToday/tasksTodayList"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
describe('tasks today list', () => {

    it('should be defined', () => {
        render(<TasksTodayList/>)

        expect(screen.getByText('description of task')).toBeInTheDocument()
        expect(screen.getByText('Play/pause')).toBeInTheDocument()
    })

})

//testar botão