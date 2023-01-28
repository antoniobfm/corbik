import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: transparent;
    outline: none;
    border: none;

    cursor: pointer;

    g {
      transition: 0.3s all;
    }

    :hover {
      g {
        opacity: 0.95;
      }
    }
  }
`;
