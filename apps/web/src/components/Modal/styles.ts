import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  background: rgba(0, 0, 0, 0.75);

  > div {
    flex: 1;
  }
`;
