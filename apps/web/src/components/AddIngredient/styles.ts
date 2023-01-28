import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 90vh;

  padding: 0px 24px;
`;

export const Close = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  align-self: flex-end;

  padding: 8px 16px;
  gap: 8px;

  width: 88px;
  height: 33px;

  background: #181A1B;
  border: 1px solid #222425;
  border-radius: 47px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 11.5px;
    line-height: 17px;
    display: flex;
    align-items: center;

    color: #828282;
  }
`;

export const CurrentIngredient = styled.div`
  height: 68px;

  border-radius: 6px;

  display: flex;
  justify-content: space-between;

  background: linear-gradient(0deg, #181A1B, #181A1B),
  linear-gradient(0deg, #222425, #222425),
  linear-gradient(92.97deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%);

  .food {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 0px 24px;

    border: 1px solid hsla(200, 4%, 14%, 1);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    h5 {
      margin-bottom: -6px;

      font-style: normal;
      font-weight: 400;
      font-size: 9.9px;
      line-height: 15px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #828282;
    }

    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #FFFFFF;
    }
  }

  span {
    padding: 0px 24px;

    border-width: 1px 1px 1px 0px;
    border-style: solid;
    border-color: #222425;
    border-radius: 0px 6px 6px 0px;

    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #828282;
  }
`;

export const Library = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  background: #181A1B;
  border: 1px solid #222425;
  border-radius: 6px;

  .list {
    height: calc(350px + 54px);
    min-height: calc(350px + 54px);
    max-height: calc(350px + 54px);

    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding-bottom: 56px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;