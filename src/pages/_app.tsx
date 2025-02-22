// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; 
import Navbar from '../components/Navbar';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Kumbh Sans', sans-serif; // Use the font
    }
`;

const AppContainer = styled.div`
    padding-top: 60px; // Navbar height
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyle />
        <Navbar />
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    </>
  )
}