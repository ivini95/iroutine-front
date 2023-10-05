import SalutionContainer from "@/app/components/profile/salutationContainer"
import { render, screen } from "@testing-library/react"

describe('salutation Container', () => {
    it('should be show name and salutation', () => {
        render(<SalutionContainer/>)

        expect(screen.getByText("Vinicius")).toBeInTheDocument();
        expect(screen.getByText("Boa noite.")).toBeInTheDocument();
    })
})
