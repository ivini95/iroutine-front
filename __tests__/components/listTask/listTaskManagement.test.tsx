import '@testing-library/jest-dom';
import ListTaskManagement from '@/app/components/listTask/listTaskManagement';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
describe('list tasks management', () => {
  it('should be defined', () => {
    render(<ListTaskManagement />);

    expect(screen.getByText('Description task')).toBeInTheDocument();
  });
});


describe('list task redirect', () => {
  it('should redirect to edit page when click button edit', () => {
    render(<ListTaskManagement />, { wrapper: MemoryRouterProvider });

    fireEvent.click(screen.getByTestId('editTask'));
    expect(mockRouter.asPath).toEqual('/editTask');
  });
});

