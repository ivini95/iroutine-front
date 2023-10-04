import NavigateProfile from "@/app/components/profileComponents/navigateProfile"
import {fireEvent, render, screen } from "@testing-library/react"
import { useRouter } from "next/router"

describe('navigate profile', () => {
    it('should be render buttons', () => {
        render(<NavigateProfile/>)

        expect(screen.getByText("COMEÇAR")).toBeInTheDocument();
        expect(screen.getByText("CRIAR TAREFA")).toBeInTheDocument();
        expect(screen.getByText("GERENCIAR")).toBeInTheDocument();
    })
})

//testar redirecionamento