import Home from "@/app/page"
import { fireEvent, render, screen } from "@testing-library/react"

import {MemoryRouterProvider} from 'next-router-mock/MemoryRouterProvider'
import mockRouter from 'next-router-mock'

describe('home page', () => {

    it('should render button login', () => {
        render(<Home/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should redirect to profile page', () => {
        render(<Home/>, {wrapper: MemoryRouterProvider})

        fireEvent.click(screen.getByRole('button'))
        expect(mockRouter.asPath).toEqual('/login')
    })
})