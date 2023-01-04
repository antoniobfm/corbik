import styled from 'styled-components';

interface IProps {
  display: "expanded" | "collapsed";
}

export const Container = styled.div<IProps>`
  padding: 0 24px;
  padding-bottom: ${props => props.display === "expanded" ? "24px" : "0px"};

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
    transition: 0.3s all;
    height: ${props => props.display === "expanded" ? "477px" : "40px"};
    overflow: hidden;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    column-gap: 16px;

    position: relative;

    ::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(12, 12, 13, 0) 0%, #0C0C0D 100%);
      opacity: 0.7;
    }

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