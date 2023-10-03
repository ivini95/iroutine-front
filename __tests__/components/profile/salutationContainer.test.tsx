import SalutionContainer from "@/app/components/profileComponents/salutationContainer"
import { render, screen } from "@testing-library/react"

describe('salutation Container', () => {
    it('should be return name and salutation', () => {
        render(<SalutionContainer/>)

        expect(screen.getByText("Vinicius")).toBeInTheDocument();
        expect(screen.getByText("Boa noite.")).toBeInTheDocument();
    })
})

describe('navigate profile', () => {
    it('should be return name and salutation', () => {
        render(<SalutionContainer/>)

        expect(screen.getByText("Vinicius")).toBeInTheDocument();
        expect(screen.getByText("Boa noite.")).toBeInTheDocument();
    })
})