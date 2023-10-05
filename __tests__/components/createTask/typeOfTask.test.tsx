import DateSelect from '@/app/components/createTask/dateSelect';
import TypeOfTask from '@/app/components/createTask/typeOfTask';
import { render, screen } from '@testing-library/react';

describe('type of task', () => {
  it('should be redirect type select task', () => {
    render(<TypeOfTask />);

    expect(screen.getByText('Cronometro')).toBeInTheDocument();
    expect(screen.getByText('Temporizador')).toBeInTheDocument();
  });
});
