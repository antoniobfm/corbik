import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 56px;
  padding: 0px 24px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.03) 0%, rgba(24, 26, 27, 0) 62.45%), rgba(11, 11, 12, 0.6);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(34, 36, 37, 0.5);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  
  input {
    width: 100%;
    height: 100%;

    background: transparent;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.95);
  }
`;