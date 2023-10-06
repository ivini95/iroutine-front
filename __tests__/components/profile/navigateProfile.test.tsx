import NavigateProfile from '@/app/components/profile/navigateProfile';
import { fireEvent, render, screen } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('navigate profile', () => {
  it('should be render buttons', () => {
    render(<NavigateProfile />);

    expect(screen.getByText('COMEÇAR')).toBeInTheDocument();
    expect(screen.getByText('CRIAR TAREFA')).toBeInTheDocument();
    expect(screen.getByText('GERENCIAR')).toBeInTheDocument();
  });

  it('should be rendered correctly', () => {
    render(<NavigateProfile />, { wrapper: MemoryRouterProvider });

    fireEvent.click(screen.getByText('COMEÇAR'));
    expect(mockRouter.asPath).toEqual('/statusToday');

    fireEvent.click(screen.getByText('CRIAR TAREFA'));
    expect(mockRouter.asPath).toEqual('/createTask');

    fireEvent.click(screen.getByText('GERENCIAR'));
    expect(mockRouter.asPath).toEqual('/listTask');
  });
});
