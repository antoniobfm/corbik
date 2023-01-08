import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  background: linear-gradient(0deg, #181A1B, #181A1B),
  linear-gradient(0deg, #222425, #222425),
  linear-gradient(92.01deg, rgba(255, 255, 255, 0.03) 0%, rgba(24, 26, 27, 0) 62.45%);

  border: 1px solid rgba(34, 36, 37, 1);

  .search {
		position: relative;
		z-index: 1;
		// pushes the barcode button over the border
    width: calc(65% + 1px);
    height: 56px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    flex-direction: row;

    .icon {
      margin-left: 14px;
    }

    input {
			position: relative;
			z-index: 1;
      background: none;
      outline: none;
      border: none;
      height: 56px;
			width: 100%;

      padding-left: 16px;
			padding-right: 24px;
      color: rgba(255, 255, 255, 0.95);
      font-size: 16px;

			-webkit-user-select: text; /* Chrome, Opera, Safari */
			-moz-user-select: text; /* Firefox 2+ */
			-ms-user-select: text; /* IE 10+ */
			user-select: text; /* Standard syntax */
    }
  }
`;

export const BarcodeButton = styled.button`
  width: 35%;
  height: 56px;
	margin-top: -1px;
		box-sizing: border-box;
	/* margin-right: -14px; */
	position: relative;
	z-index: 1;

  background: linear-gradient(111.07deg, #2755AE 0%, rgba(39, 84, 174, 0.5) 100%), #181A1B;
	border: 1px solid #1E4085;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	span {
		flex: 1;
		text-align: left;
		font-size: 12px;
		font-weight: 600;
		color: #D5E0F6;
	}

	div {
		padding-left: 16px;
		padding-right: 16px;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		svg {
			font-size: 20px;
			color: #D5E0F6;
		}
	}
`;