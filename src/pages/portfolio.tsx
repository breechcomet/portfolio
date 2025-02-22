// src/pages/portfolio.tsx
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PortfolioContainer = styled.div`
    padding: 4rem;
    min-height: calc(100vh - 60px);
    background-color: #f5f0e6;
    color: #5c3a21;
`;

const PortfolioTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const CategoryFilter = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`;

const FilterButton = styled.button`
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: #d3cbb6;
    color: #5c3a21;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #c0b59f;
    }

    &.active {
        background-color: #754f2e;
        color: white;
    }
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
`;

const ProjectCard = styled.div`
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const ProjectImage = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
`;

const ProjectDetails = styled.div`
    padding: 1rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    color: #754f2e;
`;

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            title: 'Restaurant Posters',
            description: 'This was a series of posters I designed for some restaurants in Middelburg.',
            image: '/Restaurant8.png',
            category: 'design',
            slug: 'project-1',
        },
        {
            title: 'DJ Listings',
            description: 'Some DJ posters I made to express the power and thrill of fresh music.',
            image: '/DJ2.png',
            category: 'design',
            slug: 'project-2',
        },
        {
            title: 'Logo Designs',
            description: 'Branding is such a must have for every business - and it all starts with a logo. Here are some of the logos I designed.',
            image: '/Logo8.png',
            category: 'design',
            slug: 'project-3',
        },
        {
            title: 'Promo Run',
            description: 'A series of promotional posters I made for a new business in town',
            image: '/PromoRun20.png',
            category: 'design',
            slug: 'project-4',
        },
        {
            title: 'Operational Designs',
            description: 'A collection of designs for operational purposes for businesses',
            image: '/Operations1.png',
            category: 'design',
            slug: 'project-5',
        },
        {
            title: 'Invite Designs',
            description: 'A collection of designs for invitations to events and gift offers',
            image: '/Invite1.png',
            category: 'design',
            slug: 'project-6',
        },
        {
            title: 'Sports Posters',
            description: 'This was a series of posters I designed for some sports events in Middelburg.',
            image: '/IndoorSports1.png',
            category: 'design',
            slug: 'project-7',
        },
        {
            title: 'Liquor Store Posters',
            description: 'Some uniquely designed posters for a liquor store',
            image: '/Liquor10.png',
            category: 'design',
            slug: 'project-8',
        },
        {
            title: 'E-hailling, Groups & Delivery Posters',
            description: 'E-hailing, groups and deliveries allow for business to make some additional revenue and get new customers, here are some posters I have made.',
            image: '/E-hailing2.png',
            category: 'design',
            slug: 'project-9',
        },
        {
            title: 'Events',
            description: 'I had the amazing opportunity to designs posts for some events. Here is some of my work',
            image: '/Events40.png',
            category: 'design',
            slug: 'project-10',
        },
        {
            title: 'Competition',
            description: 'I had the privilledge to design some competition posters in order to draw customers, to paticipate in events.',
            image: '/Competition1.png',
            category: 'design',
            slug: 'project-11',
        },
        {
            title: 'Restaurant Drinks',
            description: 'A collection of drink posters I made for restaurants.',
            image: '/Drinks1.png',
            category: 'design',
            slug: 'project-12',
        },
        {
            title: 'Gaming Video Edits',
            description: 'A collection of edits I made for a gaming organisation. ',
            image: '/vid1.png',
            category: 'design',
            slug: 'project-13',
        },
        
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <PortfolioContainer>
            <PortfolioTitle>My Portfolio</PortfolioTitle>

            <CategoryFilter>
                <FilterButton
                    className={activeCategory === 'all' ? 'active' : ''}
                    onClick={() => setActiveCategory('all')}
                >
                    All
                </FilterButton>
                <FilterButton
                    className={activeCategory === 'web' ? 'active' : ''}
                    onClick={() => setActiveCategory('web')}
                >
                    Web Development
                </FilterButton>
                <FilterButton
                    className={activeCategory === 'design' ? 'active' : ''}
                    onClick={() => setActiveCategory('design')}
                >
                    Graphic Design
                </FilterButton>
                <FilterButton
                    className={activeCategory === 'marketing' ? 'active' : ''}
                    onClick={() => setActiveCategory('marketing')}
                >
                    Marketing
                </FilterButton>
            </CategoryFilter>

            <ProjectGrid>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.slug}>
                        <Link href={`/portfolio/${project.slug}`} legacyBehavior>
                          <a style={{display: 'block'}}>
                            <ProjectImage src={project.image} alt={project.title} width={500} height={300} />
                            <ProjectDetails>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                            </ProjectDetails>
                          </a>
                        </Link>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </PortfolioContainer>
    );
};

export default Portfolio;