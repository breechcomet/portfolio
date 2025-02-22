// src/pages/portfolio/project-13.tsx
import styled from 'styled-components';

const ProjectPageContainer = styled.div`
    padding: 4rem;
    min-height: calc(100vh - 60px);
    background-color: #f5f0e6;
    color: #5c3a21;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FeaturedVideo = styled.div`
    width: 100%;
    max-width: 800px;
    margin-bottom: 2rem;
    iframe {
        width: 100%;
        height: 450px; // Adjust height as needed
    }
`;

const ProjectName = styled.h1`
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-align: center;
`;

const ProjectCategory = styled.p`
    font-size: 0.9rem;
    color: #754f2e;
    text-align: center;
    margin-bottom: 2rem;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 800px;
    text-align: center;
`;

const AdditionalVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    iframe {
        max-width: 400px; // Adjust width as needed
        width: 100%;
        height: 225px; // Adjust height as needed
    }
`;

const Project13 = () => {
    const project = {
        title: 'Gaming Video Edits',
        category: 'Graphic Design',
        description: 'A collection of edits I made for a gaming organisation. My inspiration for these was to feel Gamer-like (bright colors in dark space). My toolkit was Adobe Premiere Pro, After Effects and even Blender.',
        featuredVideoSrc: 'https://www.youtube.com/embed/Ptjh4-e7_g8?si=a0U1-o3Cjfo9f4F8', 
        additionalVideoSrcs: [
            'https://www.youtube.com/embed/BuoAMlZv5AU?si=KW7B50MQ7Wgg1FUG', 
        ],
    };

    return (
        <ProjectPageContainer>
            <FeaturedVideo>
                <iframe
                    src={project.featuredVideoSrc}
                    title="Featured Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </FeaturedVideo>
            <ProjectName>{project.title}</ProjectName>
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectDescription>{project.description}</ProjectDescription>
            <AdditionalVideos>
                {project.additionalVideoSrcs.map((videoSrc, index) => (
                    <iframe
                        key={index}
                        src={videoSrc}
                        title={`Additional Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                ))}
            </AdditionalVideos>
        </ProjectPageContainer>
    );
};

export default Project13;