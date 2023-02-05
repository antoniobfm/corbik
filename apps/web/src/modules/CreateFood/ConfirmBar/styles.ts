import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 32px);
  height: 56px;
  margin: 0 16px;
  margin-bottom: 32px;

  position: fixed;
  z-index: 2;
	bottom: 0;

	::before {
		content: '';
		width: 150vw;
		height: 124px;
		position: fixed;
		bottom: -33px;
		left: -16px;
		z-index: 0;
		transform:scale(1.5);
		-webkit-mask: -webkit-linear-gradient(transparent, #181A1B 50%, #181A1B);
  	-webkit-mask: linear-gradient(transparent, #181A1B 50%, #181A1B);
		background: linear-gradient(180deg, rgba(10, 10, 11, 0) 0%, #0A0A0B 100%);
		backdrop-filter: blur(5px);
	}

	> div {
		position: relative;
		border: 1px solid #222425;
		width: 100%;
		height: 100%;
  	border-radius: 6px;
		background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.03) 0%, rgba(24, 26, 27, 0) 62.45%), #181A1B;
	}
	/* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25); */

`;

export const Menu = styled.div`
	max-height: 56px;
  display: flex;
  align-items: center;
  flex-direction: row;
	box-sizing: border-box;
	border-radius: 6px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
	background: linear-gradient(91.23deg, rgba(255, 255, 255, 0.03) 0%, rgba(24, 26, 27, 0) 50%), #181A1B;
`;

export const GoBack = styled.button`
  min-width: 30%;

  background: none;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;