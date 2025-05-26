// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 
          Make all absolute URLs like "/images/1.JPG" become
          "/wedding/images/1.JPG" at runtime 
        */}
        <base href="/wedding/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
