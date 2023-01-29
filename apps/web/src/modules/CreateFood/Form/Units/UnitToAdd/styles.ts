import styled from 'styled-components';

export const Container = styled.div`display: flex;
  display: flex;
  flex-direction: column;

  background: #181A1B;
  border: 1px solid #222425;
  border-radius: 6px;

  h3 {
    padding: 24px 24px 16px;
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

export const AddCustom = styled.div` 
  display: flex;

  input {
    padding-left: 24px;

    flex: 1;

    outline: none;
    border: none;

    background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.03) 0%, rgba(24, 26, 27, 0) 62.45%), rgba(11, 11, 12, 0.6);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 6px 6px;

    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    &::placeholder {
      opacity: 0.4;
    }
  }

  button {
    width: 80px;
    height: 48px;

    border-radius: 0px 0px 6px 0px;
    border: none;
    outline: none;
    background: linear-gradient(113.21deg, rgba(39, 174, 96, 0.5) 0%, rgba(39, 174, 96, 0.25) 96.25%);
  }
`;