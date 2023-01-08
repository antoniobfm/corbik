import React from 'react';

import { BarcodeButton, Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <div className="search">
        <div className="icon">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M7.53939 11.6667C10.7317 11.6667 13.3195 9.27886 13.3195 6.33334C13.3195 3.38782 10.7317 1 7.53939 1C4.34712 1 1.75928 3.38782 1.75928 6.33334C1.75928 9.27886 4.34712 11.6667 7.53939 11.6667Z" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.7645 13.0001L11.6216 10.1001" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search"
        />
      </div>
      <BarcodeButton>
        <div>
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5234 12.6379L14.8957 12.625C15.1944 12.6237 15.4805 12.5044 15.6917 12.2932C15.9029 12.082 16.0221 11.7959 16.0234 11.4973V2.50273C16.0221 2.20405 15.9029 1.91798 15.6917 1.70678C15.4805 1.49558 15.1944 1.37634 14.8957 1.375L13.5234 1.38789M3.52344 1.375L2.08594 1.38789C1.46562 1.38789 1.02344 1.8957 1.02344 2.51562V11.5105C1.02344 12.1305 1.46562 12.6379 2.08594 12.6379L3.52344 12.625M13.5234 4.5V9.5M11.0234 3.25V10.75M8.52344 3.875V10.125M6.02344 3.25V10.75M3.52344 4.5V9.5" stroke="#D5E0F6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span>BARCODE</span>
      </BarcodeButton>
    </Container>
  )
}

export default SearchBar;