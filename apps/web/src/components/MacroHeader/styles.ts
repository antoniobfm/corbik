import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 16px;

  .macros {
    display: flex;
    align-items: center;
    justify-content: space-between;

    column-gap: 16px;
  }

  .micros {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    column-gap: 16px;

    h3 {
      font-family: 'Futura PT';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #F2F2F2;

      opacity: 0.4;
    }

    .vitamins {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      row-gap: 16px;

      flex: 1;
    }

    .minerals {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      row-gap: 16px;

      flex: 1;
    }
  }
`;