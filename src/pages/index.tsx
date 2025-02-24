import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useMemo } from 'react';

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: blur(5px);
`;

const HeroContent = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CallToAction = styled(Link)`
  background-color: #0070f3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Kumbh Sans', sans-serif;
  transition: background-color 0.2s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

const ThumbnailBarContainer = styled.div`
  width: 80%;
  margin-top: 1rem;
  overflow: hidden;
`;

const ThumbnailBarTitle = styled.h2`
  text-align: left;
  margin-bottom: 0.5rem;
`;

const ThumbnailBar = styled.div`
  width: 100%;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0.5rem;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.5s ease;

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const TypingContainer = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white }
`;

const TypingText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid white;
  animation: ${typing} 2s steps(20, end) forwards, ${blinkCaret} 0.75s step-end infinite;
`;

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const thumbnailBarRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState('Graphic Designer');
  const skills = useMemo(
    () => [
      'Graphic Designer',
      'Front End Developer',
      'Marketing Specialist',
      'IT Specialist',
      'Data Analyst',
    ],
    []
  );
  const [index, setIndex] = useState(0);

  const carouselImages = [
    { path: 'https://i.ibb.co/yDp3V8s/Carousel1.png', alt: 'Carousel Image 1' },
    { path: 'https://i.ibb.co/JJRQsrh/Carousel2.png', alt: 'Carousel Image 2' },
    { path: 'https://i.ibb.co/LdpnQz3x/Carousel3.png', alt: 'Carousel Image 3' },
    { path: 'https://i.ibb.co/5hbcW0GG/Carousel4.png', alt: 'Carousel Image 4' },
    { path: 'https://i.ibb.co/27w0gm0F/Carousel5.png', alt: 'Carousel Image 5' },
    { path: 'https://i.ibb.co/7xqnkrXH/Carousel6.png', alt: 'Carousel Image 6' },
    { path: 'https://i.ibb.co/xqTQJQ13/Carousel7.png', alt: 'Carousel Image 7' },
    { path: 'https://i.ibb.co/pB9PZcRL/Carousel8.png', alt: 'Carousel Image 8' },
    { path: 'https://i.ibb.co/JFgXx192/Carousel9.png', alt: 'Carousel Image 9' },
    { path: 'https://i.ibb.co/6Rng1qwh/Carousel10.png', alt: 'Carousel Image 10' },
    { path: 'https://i.ibb.co/mrY0H0Wh/Carousel11.png', alt: 'Carousel Image 11' },
    { path: 'https://i.ibb.co/hx6fc8nX/Carousel12.png', alt: 'Carousel Image 12' },
    { path: 'https://i.ibb.co/vxGFX94G/Carousel13.png', alt: 'Carousel Image 13' },
    { path: 'https://i.ibb.co/r2L1W5JT/Carousel14.png', alt: 'Carousel Image 14' },
    { path: 'https://i.ibb.co/TBZ6m2d4/Carousel15.png', alt: 'Carousel Image 15' },
    { path: 'https://i.ibb.co/279SzZwb/Carousel16.png', alt: 'Carousel Image 16' },
    { path: 'https://i.ibb.co/xqTQJQ13/Carousel7.png', alt: 'Carousel Image 17' },
    { path: 'https://i.ibb.co/TDWVfcGB/Carousel18.png', alt: 'Carousel Image 18' },
    { path: 'https://i.ibb.co/KcFCz7GP/Carousel19.png', alt: 'Carousel Image 19' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % skills.length;
        setCurrentText(skills[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [skills]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (thumbnailBarRef.current) {
        const nextScrollPosition = scrollPosition + 100;

        thumbnailBarRef.current.scrollTo({
          left: nextScrollPosition,
          behavior: 'smooth',
        });
        setScrollPosition(nextScrollPosition);

        if (nextScrollPosition >= thumbnailBarRef.current.scrollWidth - thumbnailBarRef.current.clientWidth) {
          setTimeout(() => {
            thumbnailBarRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
            setScrollPosition(0);
          }, 5000);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <Hero>
      <BackgroundImage src="/Munashe-Home.jpg" alt="Background" fill sizes="100vw" priority />
      <HeroContent>
        <HeroTitle>Welcome to My Portfolio</HeroTitle>
        <TypingContainer>
          I Am A <TypingText key={index}>{currentText}</TypingText>
        </TypingContainer>
        <CallToAction href="/portfolio">View My Work</CallToAction>
      </HeroContent>

      <ThumbnailBarContainer>
        <ThumbnailBarTitle>This Week&apos;s Picks</ThumbnailBarTitle>
        <ThumbnailBar ref={thumbnailBarRef}>
          {carouselImages.map((image, idx) => (
            <Thumbnail key={idx}>
              <Image src={image.path} alt={image.alt} width={100} height={100} objectFit="cover" />
            </Thumbnail>
          ))}
        </ThumbnailBar>
      </ThumbnailBarContainer>
    </Hero>
  );
};

export default Home;
