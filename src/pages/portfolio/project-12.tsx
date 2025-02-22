// src/pages/portfolio/project-12.tsx
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


const Project12 = () => { // Slug Number
    const project = { 
        title: 'Restaurant Drinks',
        category: 'Graphics Design',
        description: 'A collection of drink posters I made for restaurants. My inspiration for these was to be bright and use captivating typography .My toolkit was just Adobe Photoshop, and Adobe Express.',
        featuredImage: '/Drinks1.png',
        additionalImages: [
            '/Drinks9.png',
            '/Drinks2.png',
            '/Drinks3.png',
            '/Drinks4.png',
            '/Drinks5.png',
            '/Drinks6.png',
            '/Drinks7.png',
            '/Drinks8.png',
            '/Drinks10.png',
            '/Drinks11.png',
            '/Drinks12.png',
            '/Drinks13.png',
            '/Drinks14.png',
            '/Drinks15.png',
            '/Drinks16.png',
            '/Drinks17.png',
            '/Drinks18.png',
            '/Drinks19.png',
            '/Drinks20.png',
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

export default Project12;