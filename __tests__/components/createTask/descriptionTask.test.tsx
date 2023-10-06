import DescriptionTask from '@/app/components/createTask/descriptionTask';
import { render, screen } from '@testing-library/react';

describe('description task from create task', () => {
  it('should be redirect description input', () => {
    render(<DescriptionTask/>);

    expect(screen.getByTestId('inputDescriptionTask')).toBeInTheDocument();
  });
});
