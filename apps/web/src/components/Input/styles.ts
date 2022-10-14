import styled, { css } from 'styled-components';

interface Props {
  isFocused: boolean;
  isFilled: boolean;
  hasIcon: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 19px 16px;
  gap: 16px;


  background: linear-gradient(91.13deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 0.01%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  padding: 20px 16px;

  transition: 0.3s all;

  /* :has(:focus-within) {
    border: 1px solid #fff;
  } */

  svg > path{
    stroke: #E4E3E8;
  }

  input {
    width: 100%;

    outline: none;
    border: none;
    background: transparent;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 111.53%;
    /* identical to box height, or 16px */

    letter-spacing: -0.02em;

    /* Purple Secondary Text */

    color: var(--high-emphasis);

    ::placeholder {
      color: var(--medium-emphasis);
    }
  }

  :hover {
    border-color: var(--medium-emphasis);
    cursor: text;
  }

  ${props =>
    props.isFocused && css`
      border: 1px solid var(--high-emphasis);

    :hover {
      border-color: var(--high-emphasis);
    }
  `}

  ${props =>
    props.isFilled && css`
      border: 1px solid var(--high-emphasis);

    :hover {
      border-color: var(--high-emphasis);
    }
  `}
`;
