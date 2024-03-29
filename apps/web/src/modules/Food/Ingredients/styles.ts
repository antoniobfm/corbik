import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  gap: 16px;

  background: #181A1B;
  border: 1px solid #222425;

  h2 {
    padding-left: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 19.8px;
    line-height: 30px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #F2F2F2;
  }

  .list {
    > div:last-child {
      border: none;
    }
  }

  button {
    width: 100%;
    height: 56px;

    margin: auto;

    background: none;
    outline: none;
    border: none;

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #F2F2F2;
  }
`;
