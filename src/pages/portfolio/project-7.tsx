// src/pages/portfolio/project-7.tsx
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


const Project7 = () => { // Slug Number
    const project = { 
        title: 'Sports Posters',
        category: 'Graphics Design',
        description: 'This was a series of posters I designed for some sports events in Middelburg. The goal was to create a design that would appeal to a younger audience and encourage them to participate in the events. I used bright colors and bold typography to create a fun and energetic look.',
        featuredImage: '/IndoorSports1.png',
        additionalImages: [
            '/IndoorSports2.png',
            '/IndoorSports3.png',
            '/IndoorSports4.png',
            '/IndoorSports5.png',
            '/IndoorSports6.png',
            '/IndoorSports7.png',
            '/IndoorSports8.png',
            '/IndoorSports9.png',
            '/IndoorSports10.png',
            '/IndoorSports11.png',
            '/IndoorSports12.png',
            '/IndoorSports13.png',
            '/IndoorSports14.png',
            '/IndoorSports15.png',
            '/IndoorSports16.png',
            '/IndoorSports17.png',
            '/IndoorSports18.png',
            '/IndoorSports19.png',
            '/IndoorSports20.png',
            '/IndoorSports21.png',
            '/IndoorSports22.png',
            '/IndoorSports23.png',
            '/IndoorSports24.png',
            '/IndoorSports25.png',
            '/IndoorSports26.png',
            '/IndoorSports27.png',
            '/IndoorSports28.png',
            '/IndoorSports29.png',
            '/IndoorSports30.png',
            '/IndoorSports31.png',
            '/IndoorSports32.png',
            '/IndoorSports33.png',
            '/IndoorSports34.png',
            '/IndoorSports35.png',
            '/IndoorSports36.png',
            '/IndoorSports37.png',
            '/IndoorSports38.png',
            '/IndoorSports39.png',
            '/IndoorSports40.png',
            '/IndoorSports41.png',
            '/IndoorSports42.png',
            '/IndoorSports43.png',
            '/IndoorSports44.png',
            '/IndoorSports45.png',
            '/IndoorSports46.png',
            '/IndoorSports47.png',
            '/IndoorSports48.png',
            '/IndoorSports49.png',
            '/IndoorSports50.png',
            '/IndoorSports51.png',
            '/IndoorSports52.png',
            '/IndoorSports53.png',
            '/IndoorSports54.png',
            '/IndoorSports55.png',
            '/IndoorSports56.png',
            '/IndoorSports57.png',
            '/IndoorSports58.png',
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

export default Project7;