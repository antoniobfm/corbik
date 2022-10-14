import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  outline: none;

  background: #222126;
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  gap: 6px;

  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* Purple Primary Text */

  color: var(--high-emphasis);

  transition: 0.3s all;

  opacity: 0.5;

  :hover {
    cursor: pointer;
    background: #2f3136;
    opacity: 1;
  }
`;
