import React, { useEffect } from 'react'
import GlobalStyle from '../GlobalStyle'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {

	return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
	);
}

export default App

