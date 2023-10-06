import TypeOfTask from '@/app/components/editTask/typeOfTask';
import { render, screen } from '@testing-library/react';

describe('type of task from edit task', () => {
  it('should be redirect type select task', () => {
    render(<TypeOfTask />);

    expect(screen.getByText('Cronometro')).toBeInTheDocument();
    expect(screen.getByText('Temporizador')).toBeInTheDocument();
  });
});
