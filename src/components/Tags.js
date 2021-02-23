import { useState } from 'react';
import styled from 'styled-components';

export default function Tags({ tags, onUpdateTags }) {
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
  };

  return (
    <div>
      <Input>
        <label htmlFor="tags">Product Tags</label>
        <input
          type="text"
          name="tags"
          value={tagInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Input>
      <TagsContainer>
        {tags?.map((tag, index) => (
          <Tag key={index + tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    </div>
  );
}

const Input = styled.div`
  display: grid;
  input {
    margin-top: 1rem;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #aeffd8;
  color: #183642;
  margin: 0.2rem;
  padding: 0.4rem 0.2rem 0.2rem;
  position: relative;
`;
