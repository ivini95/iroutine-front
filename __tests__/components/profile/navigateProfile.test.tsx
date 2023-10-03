import NavigateProfile from "@/app/components/profileComponents/navigateProfile"
import { fireEvent, render, screen } from "@testing-library/react"
import { useRouter } from "next/router"


jest.mock("next/dist/client/router", () => ({
    useRouter: jest.fn(),
 }))
describe('navigate profile', () => {
    it('should be render buttons', () => {
        render(<NavigateProfile/>)

        expect(screen.getByText("COMEÇAR")).toBeInTheDocument();
        expect(screen.getByText("CRIAR TAREFA")).toBeInTheDocument();
        expect(screen.getByText("GERENCIAR")).toBeInTheDocument();
    })

    const mockPush = jest.fn(() => Promise.resolve(true));

    beforeAll(() => {
        useRouter.mockReturnValue({
          asPath: "/",
          query: {},
          push: mockPush,
          prefetch: () => Promise.resolve(true)
        })
      })
    it('should navigate accordingly', () => {
        render(<NavigateProfile/>)

        const startButton = screen.getByText("COMEÇAR")
        fireEvent.click(startButton)
    })
})