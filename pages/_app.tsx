import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from './../app/store';
import { Component, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)
    
  return <Provider store={store}>
    {getLayout(<Component {...pageProps} />)}
  </Provider>
}

export default MyApp
