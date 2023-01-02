import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */

    box-sizing: border-box;
  }

  body {
    background: #0A0A0B;
    color: rgba(255, 255, 255, 0.95);
    font-family: 'futura-pt', Arial, Helvetica, sans-serif;

		::-webkit-scrollbar {
			display: none;
		}
  }

	:root {
		font-size: 14px;

		--color-carb: 235, 87, 87;
		--color-prot: 45, 156, 219;
		--color-fat: 242, 201, 76;
		--color-calorie: 39, 174, 96;
		--color-micro: 156, 156, 156;
		--color-primary: aqua green;

		--corbik-green: #27AE60;

		--high-emphasis: #E4E3E8;
		--medium-emphasis: #9D99AD;
		--low-emphasis: #616161;
		--disabled-color: #333333;

		--stroke-color: #222425;

		--zero-level-black: #0A0A0B;
		--first-level-black: #181A1B;
		--second-level-black: #222426;
	}

  h1 {
    font-size: 2.369rem;
  }

  h2 {
    font-size: 1.777rem;
  }

  h3 {
    font-size: 1.333rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 17px;
  }

  a {
    color: var(--high-emphasis);
    text-decoration: none;
  }

  button, input, textarea, select, span {
    font-family: 'futura-pt', Arial, Helvetica, sans-serif;
  }

	body:not(.user-is-tabbing) button:focus,
	body:not(.user-is-tabbing) input:focus,
	body:not(.user-is-tabbing) select:focus,
	body:not(.user-is-tabbing) textarea:focus {
		outline: none;
	}
`;
