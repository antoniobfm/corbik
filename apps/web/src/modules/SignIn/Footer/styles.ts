import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 32px;

  .divider {
    width: 80%;
    height: 2px;
    background: rgba(255, 255, 255, 0.05);
  }
`;
