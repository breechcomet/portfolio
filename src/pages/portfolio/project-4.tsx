// src/pages/portfolio/project-4.tsx
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


const Project4 = () => { // Slug Number
    const project = { 
        title: 'Promo Run',
        category: 'Graphics Design',
        description: 'A series of promotional posters I made for a new business in town. My toolkit was only Adobe Photoshop, Canva and even at times Adobe Express',
        featuredImage: '/PromoRun20.png',
        additionalImages: [
            '/PromoRun2.png', 
            '/PromoRun3.png',
            '/PromoRun1.png',
            '/PromoRun5.png',
            '/PromoRun6.png',
            '/PromoRun7.png',
            '/PromoRun1.png',
            '/PromoRun9.png',
            '/PromoRun10.png',
            '/PromoRun11.png',
            '/PromoRun12.png',
            '/PromoRun13.png',
            '/PromoRun14.png',
            '/PromoRun15.png',
            '/PromoRun16.png',
            '/PromoRun17.png',
            '/PromoRun18.png',
            '/PromoRun19.png',
            '/PromoRun20.png',
            '/PromoRun21.png',
            '/PromoRun22.png',
            '/PromoRun23.png',
            '/PromoRun24.png',
            '/PromoRun25.png',
            '/PromoRun26.png',
            '/PromoRun27.png',
            '/PromoRun28.png',
            '/PromoRun29.png',
            '/PromoRun30.png',
            '/PromoRun31.png',
            '/PromoRun32.png',
            '/PromoRun33.png',
            '/PromoRun34.png',
            '/PromoRun35.png',
            '/PromoRun36.png',
            '/PromoRun37.png',
            '/PromoRun38.png',
            '/PromoRun39.png',
            '/PromoRun40.png',
            '/PromoRun41.png',
            '/PromoRun42.png',
            '/PromoRun43.png',
            '/PromoRun44.png',
            '/PromoRun45.png',
            '/PromoRun46.png',
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

export default Project4;