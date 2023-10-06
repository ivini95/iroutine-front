import TimerContainer from '@/app/components/timer/timerContainer';
import { render, screen } from '@testing-library/react';

describe('timer container', () => {
  it('should be defined timer', () => {
    render(<TimerContainer />);

    expect(screen.getByText('Description task')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

//testar botão de pause/play changer

//testar tempo?