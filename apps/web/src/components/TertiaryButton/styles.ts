import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  background: none;
  outline: none;
  border: none;

  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;

  color: #2D9CDB;

  transition: 0.3s all;

  :hover {
    filter: brightness(1.1);

    cursor: pointer;
  }
`;
