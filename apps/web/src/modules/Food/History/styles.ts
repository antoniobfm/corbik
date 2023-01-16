import styled from 'styled-components';

interface IProps { 
  display: "expanded" | "collapsed" 
  logsLength: number;
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;

  background: #181A1B;
  border: 1px solid #222425;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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

    h5 {
      padding-right: 24px;

      font-style: normal;
      font-weight: 400;
      font-size: 10.5px;
      line-height: 16px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #F2F2F2;

      opacity: 0.4;
    }
  }

  .list {
    transition: 0.3s all;
    height: ${({ display, logsLength }) => display === "expanded" ? `${logsLength * 57}px` : "0px"};
    overflow: hidden;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 17.5px 24px;

      background: #181A1B;
      border-bottom: 1px solid #222425;

      :first-child {
        padding-top: calc(16px + 24px);
      }

      :last-child {
        border-bottom: none;
      }

      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #F2F2F2;
      }

      h5 {
        font-style: normal;
        font-weight: 400;
        font-size: 10.5px;
        line-height: 16px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: right;

        color: #FFFFFF;

        opacity: 0.4;
      }
    }
  }
`;
