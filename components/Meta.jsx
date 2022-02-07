import React from 'react';
import Head from 'next/head'

const Meta = ({titleHead,}) => {
  return <>
      <Head>
      <title>{titleHead}</title>
          <link rel="manifest" href="/manifest.json" /> 
          <link rel="icon" href="/android-icon-72x72.png" />
          <meta name='keywords' content='hymn, church, '/>
        </Head>
  </>;
};

export default Meta;
