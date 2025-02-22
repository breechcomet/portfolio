// src/pages/portfolio/project-8.tsx
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


const Project8 = () => { // Slug Number
    const project = { 
        title: 'Liquor Store Posters',
        category: 'Graphics Design',
        description: 'Some uniquely designed posters for a liquor store. The designs are inspired by US liquor stores and their promotional material. The posters are designed to be eye-catching and to attract customers to the store or website.',
        featuredImage: '/Liquor10.png',
        additionalImages: [
            '/Liquor1.png',
            '/Liquor2.png',
            '/Liquor3.png',
            '/Liquor4.png',
            '/Liquor5.png',
            '/Liquor6.png',
            '/Liquor7.png',
            '/Liquor8.png',
            '/Liquor9.png',
            '/Liquor10.png',
            '/Liquor11.png',
            '/Liquor12.png',
            '/Liquor13.png',
            '/Liquor14.png',
            '/Liquor15.png',
            '/Liquor16.png',
            '/Liquor17.png',
            '/Liquor18.png',
            '/Liquor19.png',
            '/Liquor20.png',
            '/Liquor21.png',
            '/Liquor22.png',
            '/Liquor23.png',
            '/Liquor24.png',
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

export default Project8;