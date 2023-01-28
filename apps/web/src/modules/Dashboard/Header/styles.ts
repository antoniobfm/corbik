import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  h1 {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 600;
    font-size: 33.16px;
    line-height: 111.53%;
    /* identical to box height, or 37px */

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;

    /* Primary Text */

    color: #E4E3E8;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    background: transparent;
    border: none;
    outline: none;
  }
`;
