import DateSelect from '@/app/components/createTask/dateSelect';
import { render, screen } from '@testing-library/react';

describe('date select', () => {
  it('should be redirect dataSelect', () => {
    render(<DateSelect/>);

    expect(screen.getByText('Data de Inicio')).toBeInTheDocument();
    expect(screen.getByText('Data de Fim')).toBeInTheDocument();
  });
});
