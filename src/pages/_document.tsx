/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/next-script-for-ga */
import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Giro é um movimento que busca impulsionar a cultura musical mineira. Criamos oportunidades para que novos talentos da indústria local consigam transformar sua arte em negócio e levar a cultura mineira para o mundo. "
          />
          <link
            href="//db.onlinewebfonts.com/c/e7d21c0fe0214c0e242e4a757f373782?family=DINNextLTW04-HeavyCondensed"
            as="font"
            type="text/css"
            rel="stylesheet"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css?family=Calibri:400,700,400italic,700italic&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
