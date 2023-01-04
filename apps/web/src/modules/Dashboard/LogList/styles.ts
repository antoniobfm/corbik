import styled from 'styled-components';

interface IProps {
  orientation: 'vertical' | 'horizontal';
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;

  row-gap: 16px;

  background-color: rgba(24, 26, 27, 1);

  > .header {
    padding: 24px 24px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      outline: none;
      
      cursor: pointer;

      svg {

      }
    }
  }

  .logs {
    padding: 0px 24px;

    overflow-x: scroll;
    
    display: flex;
    gap: 16px;
    flex-direction: ${props => props.orientation === 'vertical' ? 'column' : 'row'};

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .add-log {
    padding: 0px 24px 24px;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
      font-family: 'Futura PT';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: right;

      /* Primary Text */

      color: #E4E3E8;
    }
  }
`;
