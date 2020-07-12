import React, { ReactNode } from 'react';
import type { NextComponentType } from 'next';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import 'styles/index.css';

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps
) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default App;
