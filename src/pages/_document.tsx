// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Munashe Moyo's Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio. Here you will find my journal entries as well as some stuff I have worked on and am currently working on." />
        <meta property="og:image" content="https://i.ibb.co/VW9MMsxQ/Munashe-Avatar.jpg" />
        <meta property="og:url" content="https://munashe.top" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}