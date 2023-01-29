import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: fixed;
  bottom: 0;
  left: 0;

  background: rgba(11, 11, 12, 0.6);
  border-top: 1px solid rgba(34, 36, 37, 0.6);
  backdrop-filter: blur(6px);

  button {
    width: 100%;
    height: 100%;

    border: none;
    outline: none;
    background: transparent;
  }

  .log {
    background: linear-gradient(113.21deg, rgba(39, 174, 96, 0.5) 0%, rgba(39, 174, 96, 0.25) 96.25%);
  }
`;
