import TasksTodayList from '@/app/components/tasksToday/tasksTodayList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListTaskManagement from '@/app/components/listTask/listTaskManagement';
describe('list tasks management', () => {
  it('should be defined', () => {
    render(<ListTaskManagement />);

    expect(screen.getByText('Description task')).toBeInTheDocument();
  });
});

//testar botão
