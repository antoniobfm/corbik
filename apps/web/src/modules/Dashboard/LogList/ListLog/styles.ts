import styled from 'styled-components';

export const Container = styled.div`
  height: 63px;
  display: flex;
  justify-content: space-between;

  .header {
    display: flex;
    column-gap: 16px;

    time {
      font-family: 'Futura PT';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;

      color: #FFFFFF;

      opacity: 0.5;
    }

    .title {
      display: flex;
      column-gap: 8px;

      h4 {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        display: flex;
        align-items: center;

        /* Primary Text */

        color: #E4E3E8;
      }
    }
  }

  h5 {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.5;
  }
`;
