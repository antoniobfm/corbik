import styled from 'styled-components';

export const Container = styled.div`display: flex;
  display: flex;
  flex-direction: column;

  background: #181A1B;
  border: 1px solid #222425;
  border-radius: 6px;

  h3 {
    padding: 24px 24px 0px;
  }
`;

export const UnitOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  h4 {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.95);
  }

  span {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: right;

    /* 4. Medium Emphasis */

    color: #999999;
  }
`;