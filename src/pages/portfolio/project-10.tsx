// src/pages/portfolio/project-10.tsx
import styled from 'styled-components';
import Image from 'next/image';

const ProjectPageContainer = styled.div`
    padding: 4rem;
    min-height: calc(100vh - 60px);
    background-color: #f5f0e6;
    color: #5c3a21;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FeaturedImage = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 2rem;
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

const AdditionalImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

const AdditionalImage = styled(Image)`
    max-width: 300px;
    height: auto;
    border-radius: 8px;
`;


const Project10 = () => { // Slug Number
    const project = { 
        title: 'Events',
        category: 'Graphics Design',
        description: 'I had the amazing opportunity to designs posts for some events. My inspiration was to create a design that would be appealing to the target audience and also convey the message of the event. I used Adobe Photoshop, Canva, Adobe Express and Postermywall to create the designs.',
        featuredImage: '/Events40.png',
        additionalImages: [
            'Events1.png',
            'Events2.png',
            'Events3.png',
            'Events4.png',
            'Events5.png',
            'Events6.png',
            'Events7.png',
            'Events8.png',
            'Events9.png',
            'Events10.png',
            'Events11.png',
            'Events12.png',
            'Events13.png',
            'Events14.png',
            'Events15.png',
            'Events16.png',
            'Events17.png',
            'Events18.png',
            'Events19.png',
            'Events20.png',
            'Events21.png',
            'Events22.png',
            'Events23.png',
            'Events24.png',
            'Events25.png',
            'Events26.png',
            'Events27.png',
            'Events28.png',
            'Events29.png',
            'Events30.png',
            'Events31.png',
            'Events32.png',
            'Events33.png',
            'Events34.png',
            'Events35.png',
            'Events36.png',
            'Events37.png',
            'Events38.png',
            'Events39.png',
            'Events40.png',
            'Events41.png',
            'Events42.png',
            'Events43.png',
            'Events44.png',
            'Events45.png',
            'Events46.png',
            'Events47.png',
            'Events48.png',
            'Events49.png',
            'Events50.png',
        ],
    };

    return (
        <ProjectPageContainer>
            <FeaturedImage src={project.featuredImage} alt={project.title} width={800} height={500} />
            <ProjectName>{project.title}</ProjectName>
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectDescription>{project.description}</ProjectDescription>
            <AdditionalImages>
                {project.additionalImages.map((image, index) => (
                    <AdditionalImage key={index} src={image} alt={`Additional Image ${index + 1}`} width={300} height={200} />
                ))}
            </AdditionalImages>
        </ProjectPageContainer>
    );
};

export default Project10;