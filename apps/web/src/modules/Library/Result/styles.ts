import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  border-bottom: 1px solid #222425;

  :last-child {
    border-bottom: none;
  }

  .title {
    h5 {
      margin-bottom: -6px;
    }
  }

  h4 {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.95);
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
