import CurrentTask from "@/app/components/task/currentTask"
import Task from "@/app/task/page";
import { fireEvent, render, screen } from "@testing-library/react"
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
describe('current task', () => {

    it('should be defined task', () => {
        render(<CurrentTask/>)

        expect(screen.getByText('Description task')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should be redirect when task is completed', () => {
        render(<Task/>, {wrapper: MemoryRouterProvider})

        fireEvent.click(screen.getByTestId('completedTaskBtn'))
        expect(mockRouter.asPath).toEqual('/tasksToday')

    })

})

//testar botão de pause/play
