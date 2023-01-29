import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Link href="/diet">
        <button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7308 7.99016H12.1991C12.5302 7.99107 12.8582 7.92629 13.1641 7.79956C13.47 7.67283 13.7478 7.48667 13.9812 7.25187L16.5592 4.65337L15.8594 3.94784L13.2269 6.58035L12.6798 6.03325L15.3123 3.40042L14.5878 2.69772L11.9651 5.32016L11.4196 4.77306L14.0521 2.14022L13.3466 1.44067L10.748 4.0187C10.5132 4.25221 10.3271 4.52999 10.2003 4.83594C10.0736 5.1419 10.0088 5.46996 10.0098 5.80112V6.26916L8.65129 7.62763L2.44859 1.44067C1.0539 3.16891 1.87755 6.34507 3.44768 7.91551L6.14067 10.6085C6.97691 11.4448 7.1429 11.5194 8.09159 11.1377C8.29601 11.0554 8.37034 11.0646 8.5609 11.2548L8.97036 11.6369C9.06265 11.7314 9.06485 11.7591 9.06485 11.9399V12.1144C9.06485 12.7783 9.48943 13.1601 9.76912 13.4448L13.0316 16.5592L15.2994 14.2915L10.3723 9.34863L11.7308 7.99016Z" fill="#F2F2F2"/>
            <path d="M8.0982 12.1053C7.15895 12.2978 6.58287 12.4751 5.48142 11.3736C5.46379 11.356 5.44552 11.339 5.42788 11.3213L4.81369 10.7072L1.44067 14.0395L3.96043 16.5593L8.496 12.0237L8.0982 12.1053Z" fill="#F2F2F2"/>
          </svg>
        </button>
      </Link>
      <Link href="/library">
        <button className="log">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.33337V12.6667" stroke="#D5F6E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33325 8H12.6666" stroke="#D5F6E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </Link>
      {/* <Link href="/body">
        <button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_389_2996)">
              <path d="M9.0001 4.2662C10.0168 4.2662 10.841 3.44199 10.841 2.42527C10.841 1.40856 10.0168 0.584351 9.0001 0.584351C7.98339 0.584351 7.15918 1.40856 7.15918 2.42527C7.15918 3.44199 7.98339 4.2662 9.0001 4.2662Z" fill="#F2F2F2"/>
              <path d="M15.8378 4.79211H2.16235V6.50154H6.89616L5.8442 17.1897L7.52076 17.4156L8.23247 11.1039H9.77819L10.4794 17.4156L12.1559 17.1861L11.104 6.50154H15.8378V4.79211Z" fill="#F2F2F2"/>
            </g>
            <defs>
              <clipPath id="clip0_389_2996">
                <rect width="16.8313" height="16.8313" fill="white" transform="translate(0.584473 0.584351)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </Link> */}
    </Container>
  )
}