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
  it('should return a tag in uppercase after user input', () => {
    const tags = [];
    const handleUpdateTag = jest.fn((tag) => tag);
    const { getByTestId } = render(
      <Tags tags={tags} onUpdateTags={handleUpdateTag} />
    );
    const input = getByTestId('tag-input');
    fireEvent.change(input, { target: { value: 'one' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleUpdateTag).toHaveBeenCalledWith('ONE');
  });
  it('should delete the last tag when user presses backspace', () => {
    const tags = ['one', 'two', 'three'];
    const handleDeleteTag = jest.fn((tag) => tag);
    const { getByTestId } = render(
      <Tags tags={tags} onDeleteTag={handleDeleteTag} />
    );
    const input = getByTestId('tag-input');
    fireEvent.keyDown(input, { key: 'Backspace' });
    expect(handleDeleteTag).toHaveBeenCalledWith(tags[2]);
  });
  it('should delete the last two tags when the users presses the backspace two times', () => {
    const tags = ['one', 'two', 'three'];
    const handleDeleteTag = jest.fn((tag) => tag);
    const { getByTestId, rerender } = render(
      <Tags tags={tags} onDeleteTag={handleDeleteTag} />
    );
    const input = getByTestId('tag-input');
    fireEvent.keyDown(input, { key: 'Backspace' });
    rerender(<Tags tags={[tags[0], tags[1]]} onDeleteTag={handleDeleteTag} />);
    fireEvent.keyDown(input, { key: 'Backspace' });
    expect(handleDeleteTag).toHaveBeenNthCalledWith(2, 'two');
  });
  it('should select the last tag in the list when the left arrow key is pressed', () => {
    const tags = ['one', 'two', 'three'];
    const { getByTestId, getAllByTestId } = render(<Tags tags={tags} />);
    const input = getByTestId('tag-input');
    fireEvent.keyDown(input, { key: 'ArrowLeft' });
    const tagElements = getAllByTestId('tag');
    const lastTag = tagElements[tagElements.length - 1];

    expect(lastTag).toHaveAttribute('data-selected', 'selected');
  });
  it('should select the first tag when the right arrow key is pressed', () => {
    const tags = ['one', 'two', 'three'];
    const { getByTestId, getAllByTestId } = render(<Tags tags={tags} />);
    const input = getByTestId('tag-input');
    fireEvent.keyDown(input, { key: 'ArrowRight' });
    const firstTag = getAllByTestId('tag')[0];
    expect(firstTag).toHaveAttribute('data-selected', 'selected');
  });
  it('should select the second tag when the right arrow key is pressed twice', () => {
    const tags = ['one', 'two', 'three'];
    const { getByTestId, getAllByTestId } = render(<Tags tags={tags} />);
    const input = getByTestId('tag-input');
    fireEvent.keyDown(input, { key: 'ArrowRight' });
    fireEvent.keyDown(input, { key: 'ArrowRight' });
    const secondTag = getAllByTestId('tag')[1];
    expect(secondTag).toHaveAttribute('data-selected', 'selected');
  });
  it('should remove the second tag when the left arrow key is pressed twice and afterwards backspace is hit', () => {
    const tags = ['one', 'two', 'three'];
    const handleDeleteTag = jest.fn((tag) => tag);

    const { getByTestId } = render(
      <Tags tags={tags} onDeleteTag={handleDeleteTag} />
    );
    const input = getByTestId('tag-input');
    fireEvent.keyDown(input, { key: 'ArrowLeft' });
    fireEvent.keyDown(input, { key: 'ArrowLeft' });
    fireEvent.keyDown(input, { key: 'Backspace' });

    expect(handleDeleteTag).toHaveBeenCalledWith('two');
  });
  it('should select the last tag once the user stepped backwards from right to left', () => {
    const tags = ['one', 'two', 'three'];
    const { getByTestId, getAllByTestId } = render(<Tags tags={tags} />);
    const input = getByTestId('tag-input');
    for (let i = 0; i <= tags.length; i++) {
      fireEvent.keyDown(input, { key: 'ArrowLeft' });
    }
    const tagElements = getAllByTestId('tag');
    const lastTag = tagElements[tagElements.length - 1];
    expect(lastTag).toHaveAttribute('data-selected', 'selected');
  });
});
