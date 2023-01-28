import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-bottom: 20vh;

  // Affects MacroHeader component, or it is supposed to
  > div:nth-child(3) {
    margin-bottom: -24px;
  }
`;
