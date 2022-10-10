import React, { useEffect } from 'react'
import Head from 'next/head'
import router, { useRouter } from 'next/router'
import GlobalStyle from '@/GlobalStyle'
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

