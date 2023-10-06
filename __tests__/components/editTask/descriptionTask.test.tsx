import DescriptionTask from '@/app/components/editTask/descriptionTask';
import { render, screen } from '@testing-library/react';

describe('description task from edit task', () => {
  it('should be redirect description input', () => {
    render(<DescriptionTask/>);

    expect(screen.getByTestId('inputDescriptionTask')).toBeInTheDocument();
  });
});
