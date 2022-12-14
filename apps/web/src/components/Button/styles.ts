import styled, { css } from 'styled-components';

interface IProps {
  isLoading?: boolean;
}

export const Container = styled.button<IProps>`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px 0;

  background: linear-gradient(91.34deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #4978D5;
  border: none;
  outline: none;
  border-radius: 16px;

  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  /* Purple Primary Text */

  color: #E4E3E8;

  transition: 0.3s all;

  :hover {
    background: linear-gradient(91.34deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #5A8DE5;
    cursor: pointer;
  }

  ${({ isLoading }) => isLoading && css`
    opacity: 0.5;

    :hover {
      cursor: not-allowed;
    }
  `}
`;
