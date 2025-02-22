// src/pages/portfolio/project-1.tsx
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


const Project1 = () => { // Slug Number
    const project = { 
        title: 'Restaurant Posters',
        category: 'Graphics Design',
        description: 'This was a series of posters I designed for some restaurants in Middelburg, South Africa. My goal with each poster and design was to attract customers and showcase the restaurant\'s offerings in a way that was appetizing and unique. My toolkit would vary based on speed and overrall goal and involved Adobe Photoshop, Canva and even at times Adobe Express',
        featuredImage: '/Restaurant8.png',
        additionalImages: [
            '/Restaurant2.png', 
            '/Restaurant3.png',
            '/Restaurant4.png',
            '/Restaurant5.png',
            '/Restaurant6.png',
            '/Restaurant7.png',
            '/Restaurant1.png',
            '/Restaurant9.png',
            '/Restaurant10.png',
            '/Restaurant11.png',
            '/Restaurant12.png',
            '/Restaurant13.png',
            '/Restaurant14.png',
            '/Restaurant15.png',
            '/Restaurant16.png',
            '/Restaurant17.png',
            '/Restaurant18.png',
            '/Restaurant19.png',
            '/Restaurant20.png',
            '/Restaurant21.png',
            '/Restaurant22.png',
            '/Restaurant23.png',
            '/Restaurant24.png',
            '/Restaurant25.png',
            '/Restaurant26.png',
            '/Restaurant27.png',
            '/Restaurant28.png',
            '/Restaurant29.png',
            '/Restaurant30.png',
            '/Restaurant31.png',
            '/Restaurant32.png',
            '/Restaurant33.png',
            '/Restaurant34.png',
            '/Restaurant35.png',
            '/Restaurant36.png',
            '/Restaurant37.png',
            '/Restaurant38.png',
            '/Restaurant39.png',
            '/Restaurant40.png',
            '/Restaurant41.png',
            '/Restaurant42.png',
            '/Restaurant43.png',
            '/Restaurant44.png',
            '/Restaurant45.png',
            '/Restaurant46.png',
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

export default Project1;