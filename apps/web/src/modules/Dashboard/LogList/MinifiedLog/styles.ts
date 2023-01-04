import styled from 'styled-components';

interface IProps {
	carbPerc: number;
	protsPerc: number;
	fatPerc: number;
}

export const Container = styled.div<IProps>`
  min-width: 104px;
  width: 104px;
  height: 80px;

  border: 1px solid rgba(34, 36, 37, 1);
  border-radius: 6px;

  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .title {
      h4 {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 600;
        font-size: 9.9px;
        line-height: 130%;
        /* or 13px */


        /* Primary Text */

        color: #E4E3E8;

        max-height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

      }

      h5 {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-size: 7px;
        line-height: 10px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #747676;
      }
    }

    time {
      font-family: 'Futura PT';
      font-style: normal;
      font-weight: 400;
      font-size: 7px;
      line-height: 10px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #747676;
    }
  }

	.card--macros {
		opacity: 0.5;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		h4 {
			flex: 1;
			text-align: center;
			font-size: 7px;
			height: auto;
			font-weight: 400;
			color: #747676;
		}
		.pie {
			position: relative;
			margin-left: 4px;
			width: 10px;
			height: 10px;
			background-image: conic-gradient(#EB5757 0deg, #EB5757 ${props => props.carbPerc}deg, #2D9CDB ${props => props.carbPerc}deg, #2D9CDB ${props => props.protsPerc}deg,  #F2C94C ${props => props.protsPerc}deg, #F2C94C 360deg);
			border-radius: 50%;

			::before {
				content: "";
				position: absolute;
				width: 7px;
				height: 7px;
				background: #181A1B;
				border-radius: 6px;
				margin-top: 1.5px;
				margin-left: 1.5px;
			}
		}
	}
`;
