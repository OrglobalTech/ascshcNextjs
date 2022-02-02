import React from 'react';
import Head from 'next/head'

const Meta = ({titleHead,}) => {
  return <>
      <Head>
      <title>{titleHead}</title>
          <link rel="manifest" href="/manifest.json" /> 
          <meta name='keywords' content='hymn, church, '/>
        </Head>
  </>;
};

export default Meta;
