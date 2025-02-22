// src/pages/contact.tsx
import styled, { keyframes } from 'styled-components';

const ContactContainer = styled.div`
    padding: 3rem;
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f0e6;
    color: #5c3a21;
    position: relative;
    overflow: hidden;
`;

const twinkle = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
`;

interface StarProps {
    size: number;
    duration: number;
    x: number;
    y: number;
    delay: number;
}

const Star = styled.span<StarProps>`
    position: absolute;
    font-size: ${props => props.size}rem;
    color: #d3cbb6;
    animation: ${twinkle} ${props => props.duration}s linear infinite;
    top: ${props => props.y}%;
    left: ${props => props.x}%;
    z-index: -1;
    animation-delay: ${props => props.delay}s;
    opacity: 0;
`;

const ContactForm = styled.form`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 500px;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #5c3a21;
`;

const Input = styled.input`
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #d3cbb6;
    border-radius: 4px;
    transition: border-color 0.2s;
    background-color: rgba(255,255,255, 0.5);

    &:focus {
        border-color: #754f2e;
        outline: none;
    }
`;

const TextArea = styled.textarea`
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #d3cbb6;
    border-radius: 4px;
    transition: border-color 0.2s;
    height: 120px;
    background-color: rgba(255,255,255, 0.5);

    &:focus {
        border-color: #754f2e;
        outline: none;
    }
`;

const Button = styled.button`
    padding: 0.8rem 1.5rem;
    background-color: #754f2e;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #5c3a21;
    }
`;

const Contact = () => {
    const numStars = 50;

    const stars = Array.from({ length: numStars }, (_, i) => ({
        key: i,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 5 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
    }));

    return (
        <ContactContainer>
            {stars.map(star => (
                <Star
                    key={star.key}
                    size={star.size}
                    duration={star.duration}
                    x={star.x}
                    y={star.y}
                    delay={star.delay}
                >
                    ⭐
                </Star>
            ))}
            <ContactForm action="https://formspree.io/f/xldgzeld" method="POST">
                <Label htmlFor="name">Name:</Label>
                <Input type="text" id="name" name="name" required />

                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required />

                <Label htmlFor="message">Message:</Label>
                <TextArea id="message" name="message" rows={5} required />

                <Button type="submit">Send Message</Button>
            </ContactForm>
        </ContactContainer>
    );
};

export default Contact;