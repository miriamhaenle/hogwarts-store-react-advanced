import { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Tags({ headline, tags, onUpdateTags, onDeleteTag }) {
  const [tagInput, setTagInput] = useState('');
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1);

  const handleChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tagInput.toUpperCase());
      setTagInput('');
      setSelectedTagIndex(-1);
    }

    if (event.key === 'Backspace') {
      selectedTagIndex >= 0
        ? onDeleteTag(tags[selectedTagIndex])
        : onDeleteTag(tags[tags.length - 1]);
    }

    if (event.key === 'ArrowLeft') {
      selectedTagIndex <= 0
        ? setSelectedTagIndex(tags.length - 1)
        : setSelectedTagIndex(selectedTagIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      selectedTagIndex === tags.length - 1
        ? setSelectedTagIndex(0)
        : setSelectedTagIndex(selectedTagIndex + 1);
    }
  };

  return (
    <>
      <label htmlFor="tags">{headline}</label>
      <TagsContainer>
        {tags?.map((tag, index) => (
          <Tag
            key={index + tag}
            selected={selectedTagIndex === index}
            data-testid="tag"
            data-selected={selectedTagIndex === index ? 'selected' : ''}
          >
            {tag}
            <span onClick={() => onDeleteTag(tag)}>&times;</span>
          </Tag>
        ))}
        <Input
          type="text"
          name="tags"
          value={tagInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Write here"
          data-testid="tag-input"
        />
      </TagsContainer>
    </>
  );
}

Tags.propTypes = {
  headline: PropTypes.string,
  tags: PropTypes.array,
  onUpdateTags: PropTypes.func,
  onDeleteTag: PropTypes.func,
};

const Input = styled.input`
  border: none;
  display: inline;
  width: 30%;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: var(--grey-100);
  border: 1px solid var(--grey-500);
  border-radius: 5px;
  padding: 0.4rem;
`;

const Tag = styled.span`
  background: ${(prop) =>
    prop.selected ? 'var(--primary-200)' : 'var(--secondary-300)'};
  color: #183642;
  margin: 0.2rem;
  padding: 0.4rem 0.2rem 0.2rem;
`;
