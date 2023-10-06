import TasksTodayList from '@/app/components/tasksToday/tasksTodayList';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
describe('tasks today list', () => {
  it('should be defined', () => {
    render(<TasksTodayList />);

    expect(screen.getByText('description of task')).toBeInTheDocument();
    expect(screen.getByTestId('startTaskToday')).toBeInTheDocument();
  });

  it('should redirect to task', () => {
    render(<TasksTodayList />, {wrapper: MemoryRouterProvider});

    fireEvent.click(screen.getByTestId('startTaskToday'))
    expect(mockRouter.asPath).toEqual('/task')
  })
});