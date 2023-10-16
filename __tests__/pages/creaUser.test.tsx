import { fireEvent, render, screen } from "@testing-library/react"
import {MemoryRouterProvider} from 'next-router-mock/MemoryRouterProvider'
import mockRouter from 'next-router-mock'
import CreateUser from "@/app/createUser/page"


describe('create user page', () => {

    it('should render input fields', () => {
        render(<CreateUser/>)

        expect(screen.getByTestId('userInput')).toBeInTheDocument()
        expect(screen.getByTestId('passwordInput')).toBeInTheDocument()
        expect(screen.getByTestId('passwordConfirmInput')).toBeInTheDocument()
    })

    it('should render button', () => {
        render(<CreateUser/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should redirect to profile page', () => {
        render(<CreateUser/>, {wrapper: MemoryRouterProvider})

        fireEvent.click(screen.getByRole('button'))
        expect(mockRouter.asPath).toEqual('/profile')
    })

    it('should redirect to login page', () => {
        render(<CreateUser/>, {wrapper: MemoryRouterProvider})

        fireEvent.click(screen.getByTestId('loginLink'))
        expect(mockRouter.asPath).toEqual('/login')
    })
})