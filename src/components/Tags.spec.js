import { render, fireEvent } from '@testing-library/react';
import Tags from './Tags';

describe('Tags component', () => {
  it('should render the headline', () => {
    const { getByText } = render(<Tags headline="headline text" />);
    expect(getByText('headline text')).toBeInTheDocument();
  });
  it('should show three tags prefilled if three tags are added', () => {
    const { queryAllByTestId } = render(
      <Tags tags={['one', 'two', 'three']} />
    );
    expect(queryAllByTestId('tag')).toHaveLength(3);
  });
  it.todo('should add another tag when user enters one', () => {
    const tags = [];
    const { queryAllByTestId, getByTestId } = render(<Tags tags={tags} />);
    expect(queryAllByTestId('tag')).toHaveLength(0);

    const input = getByTestId('tag-input');
    input.value = 'One';
    fireEvent.input(input);
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(queryAllByTestId('tag')).toHaveLength(0);
  });
});
