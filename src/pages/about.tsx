// src/pages/about.tsx
import styled from 'styled-components';
import Image from 'next/image';

const AboutContainer = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  background-color: #f5f0e6; 
  color: #5c3a21; 
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin-top: 2rem;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: block;
`;

const AboutSection = styled.section`
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center; 
`;

const ToolkitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ToolkitItem = styled.li`
  background-color: #5c3a21; 
  color: #f5f0e6; 
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const Interest = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  text-align: center;
  flex: 1 0 0; 
  min-width: 150px; 
`;

const InterestIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
`;

const SpotifyEmbed = styled.div`
  margin-top: 2rem;
`;

const DesignProcessSteps = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
  margin-top: 1rem;
  text-align: left;
`;

const DesignProcessStep = styled.li`
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <ProfileImage src="/Munashe-Avatar.jpg" alt="My Profile" width={200} height={200} />
      <AboutContent>

        <AboutSection>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            I'm a multi-skilled young creator with a passion for building innovative and user-friendly experiences for customers. My expertise spans across design, development, marketing, and IT. I love turning ideas into reality and constantly seek new challenges and opportunities to learn and grow.
          </AboutText>
        </AboutSection>

        <AboutSection>
            <AboutTitle>My Toolkit</AboutTitle>
            <ToolkitList>
                <ToolkitItem>Canva</ToolkitItem>
                <ToolkitItem>Figma</ToolkitItem>
                <ToolkitItem>Adobe Creative Suite</ToolkitItem>
                <ToolkitItem>HTML</ToolkitItem>
                <ToolkitItem>CSS</ToolkitItem>
            </ToolkitList>
        </AboutSection>

        <AboutSection>
            <AboutTitle>Design Thinking</AboutTitle>
            <AboutText>
                My design and or development process is iterative and customer-centered.  I typically follow these steps:
                <DesignProcessSteps>
                    <DesignProcessStep>Research and draw inspiration</DesignProcessStep>
                    <DesignProcessStep>Brainstorm ways I can differentiate my work</DesignProcessStep>
                    <DesignProcessStep>Create wireframes, drafts and or prototypes.</DesignProcessStep>
                    <DesignProcessStep>Develop high-fidelity templates.</DesignProcessStep>
                    <DesignProcessStep>Test, iterate and present the final product or design based on the template.</DesignProcessStep>
                </DesignProcessSteps>
            </AboutText>
        </AboutSection>

        <AboutSection>
          <AboutTitle>My Interests</AboutTitle>
          <InterestsContainer>
            <Interest>
              <InterestIcon>🎨</InterestIcon>
              Graphic Design
            </Interest>
            <Interest>
              <InterestIcon>💻</InterestIcon>
              Web Development
            </Interest>
            <Interest>
              <InterestIcon>📈</InterestIcon>
              Marketing
            </Interest>
            <Interest>
              <InterestIcon>⚙️</InterestIcon>
              Information Technology
            </Interest>
          </InterestsContainer>
        </AboutSection>

        <AboutSection>
          <AboutTitle>My Favorite Jam</AboutTitle>
          <SpotifyEmbed>
            <iframe
              src="https://open.spotify.com/embed/track/0nIbnc1VbJKgX0r4Yi3xVM?utm_source=generator" 
              width="100%"
              height="152"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: 0, borderRadius: '12px' }}
            ></iframe>
          </SpotifyEmbed>
        </AboutSection>

      </AboutContent>
    </AboutContainer>
  );
};

export default About;