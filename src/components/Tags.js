import { useState } from 'react';
import styled from 'styled-components';

export default function Tags({
  headline,
  tags,
  onUpdateTags,
  onDeleteTag,
  onDeleteLastTag,
}) {
  const [tagInput, setTagInput] = useState('');

  console.log(tagInput, 'Tag input');

  const handleChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tagInput.toUpperCase());
      setTagInput('');
    }

    if (event.key === 'Backspace') {
      event.preventDefault();
      console.log('delete');
      onDeleteLastTag();
    }
  };

  return (
    <>
      <label htmlFor="tags">{headline}</label>
      <TagsContainer>
        {tags?.map((tag, index) => (
          <Tag key={index + tag}>
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
        />
      </TagsContainer>
    </>
  );
}

const Input = styled.input`
  border: none;
  display: inline;
  width: 30%;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.4rem;
`;

const Tag = styled.span`
  background: #aeffd8;
  color: #183642;
  margin: 0.2rem;
  padding: 0.4rem 0.2rem 0.2rem;
`;
