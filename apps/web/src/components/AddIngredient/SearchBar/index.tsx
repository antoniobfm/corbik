import React from 'react';

import { Container } from './styles';

export const SearchBar: React.FC = () => {

  return (
    <Container>
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
          <path d="M6.33334 12.037C9.27886 12.037 11.6667 9.64922 11.6667 6.7037C11.6667 3.75818 9.27886 1.37036 6.33334 1.37036C3.38782 1.37036 1 3.75818 1 6.7037C1 9.64922 3.38782 12.037 6.33334 12.037Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.0001 13.3705L10.1001 10.4705" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
      <input type="text" placeholder="Search for a food/ingredient" />
    </Container>
  )
}