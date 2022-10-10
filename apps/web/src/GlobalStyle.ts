import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
  }

  body {
    background: #0A0A0B;
    color: rgba(255, 255, 255, 0.95);
    font-family: Poppins, Arial, Helvetica, sans-serif;

		::-webkit-scrollbar {
			display: none;
		}
  }

	:root {
		font-size: 14px;

		--carbs-color: #EB5757;
		--protein-color: #2D9CDB;
		--fat-color: #F2C94C;
		--primary-color: aqua green;

		--corbik-green: #27AE60;

		--high-emphasis: #DEDEDE;
		--medium-emphasis: #999999;
		--low-emphasis: #616161;
		--disabled-color: #333333;

		--stroke-color: #222425;

		--zero-level-black: #0A0A0B;
		--first-level-black: #181A1B;
		--second-level-black: #222426;
	}

  h1 {
    font-size: 1.999rem;
  }

  h2 {
    font-size: 2.827rem;
  }

  h3 {
    font-size: 1.414rem;
  }

  p {
    font-size: 1rem;
    line-height: 17px;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.707rem;
  }

  a {
    color: var(--high-emphasis);
    text-decoration: none;
  }

  button {
    font-family: Poppins, Arial, Helvetica, sans-serif;
  }

	body:not(.user-is-tabbing) button:focus,
	body:not(.user-is-tabbing) input:focus,
	body:not(.user-is-tabbing) select:focus,
	body:not(.user-is-tabbing) textarea:focus {
		outline: none;
	}
`;
