// src/pages/portfolio/project-3.tsx
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


const Project5 = () => { // Slug Number
    const project = { 
        title: 'Operational Designs',
        category: 'Graphics Design',
        description: 'A collection of designs for operational purposes for businesses. These designs are meant to be used for signs, menus, and other business-related materials.',
        featuredImage: '/Operations8.png',
        additionalImages: [
            '/Operations1.png',
            '/Operations2.png',
            '/Operations3-1.png',
            '/Operations3-2.png',
            '/Operations3-3.png',
            '/Operations3-4.png',
            '/Operations3-5.png',
            '/Operations3-6.png',
            '/Operations3-7.png',
            '/Operations4-1.png',
            '/Operations4-2.png',
            '/Operations4-4.png',
            '/Operations4.png',
            '/Operations5.png',
            '/Operations6.png',
            '/Operations7.png',
            '/Operations8.png',
            '/Operations9.png',
            '/Operations10.png',
            '/Operations11.png',
            '/Operations12.png',
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

export default Project5;