
import WeekDaysSelect from '@/app/components/createTask/weekDaysSelect';
import { render, screen } from '@testing-library/react';

describe('week day select from create task', () => {
  it('should be redirect days of week checkbox', () => {
    render(<WeekDaysSelect/>);

    expect(screen.getByTestId('Sunday')).toBeInTheDocument();
    expect(screen.getByTestId('Monday')).toBeInTheDocument();
    expect(screen.getByTestId('Tuesday')).toBeInTheDocument();
    expect(screen.getByTestId('Wednesday')).toBeInTheDocument();
    expect(screen.getByTestId('Thursday')).toBeInTheDocument();
    expect(screen.getByTestId('Friday')).toBeInTheDocument();
    expect(screen.getByTestId('Saturday')).toBeInTheDocument();
  });
});
