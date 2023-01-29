import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;

  background: #181A1B;
  border-bottom: 1px solid #222425;

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.95);
  }

  input {
    max-width: 40%;

    padding: 9px 26px;

    background: #111213;
    border-radius: 6px;

    outline: none;
    border: none;

    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: #FFFFFF;

    opacity: 0.95;
  }
`;
