import Login from "@/app/login/page"
import { fireEvent, render, screen } from "@testing-library/react"
import {MemoryRouterProvider} from 'next-router-mock/MemoryRouterProvider'
import mockRouter from 'next-router-mock'


describe('login page', () => {

    it('should render input fields', () => {
        render(<Login/>)

        expect(screen.getByTestId('userInput')).toBeInTheDocument()
        expect(screen.getByTestId('passwordInput')).toBeInTheDocument()
    })

    it('should render button', () => {
        render(<Login/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should redirect to profile page', () => {
        render(<Login/>, {wrapper: MemoryRouterProvider})

        fireEvent.click(screen.getByRole('button'))
        expect(mockRouter.asPath).toEqual('/profile')
    })

    it('should redirect to create user page', () => {
        render(<Login/>, {wrapper: MemoryRouterProvider})

        fireEvent.click(screen.getByTestId('createUserLink'))
        expect(mockRouter.asPath).toEqual('/createUser')
    })
})