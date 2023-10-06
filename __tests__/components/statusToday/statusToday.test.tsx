import StatusToday from '@/app/statusToday/page';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
describe('status today redirect', () => {
  it('should redirect correctly', () => {
    render(<StatusToday />, { wrapper: MemoryRouterProvider });

    fireEvent.click(screen.getByText('TAREFAS'));
    expect(mockRouter.asPath).toEqual('/tasksToday');
  });
});
