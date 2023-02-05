import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px 0;

  padding: 24px 0 20vh;

  > div:nth-child(2) {
    margin-bottom: -24px;
  }
`;
