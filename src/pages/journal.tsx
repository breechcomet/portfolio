// src/pages/journal.tsx
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface JournalEntry {
  _id: string;
  title: string;
  slug: string;
  date: string;
}

const JournalContainer = styled.div`
  padding: 4rem;
  min-height: calc(100vh - 60px);
  background-color: #f5f0e6;
  color: #5c3a21;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const JournalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const NotebookBackground = styled.div`
  background-image: url('/Notebook.png'); // Path to your notebook image
  background-size: cover;
  background-repeat: repeat-y;
  padding: 2rem;
  border: 2px solid #d3cbb6;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
`;

const EntryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EntryItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const EntryLink = styled(Link)`
  text-decoration: none;
  color: #5c3a21;

  &:hover {
    color: #754f2e;
  }
`;

const EntryDate = styled.span`
  color: #777;
  font-size: 0.8rem;
  margin-left: 1rem;
`;

const float = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-20%);
    opacity: 0;
  }
`;

interface FloatingProps {
  duration: number;
  size: number;
  x: number;
}

const Bubble = styled.div<FloatingProps>`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s linear infinite;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.x}%;
  bottom: -${props => props.size}px;
  z-index: -1;
`;

const Cloud = styled.div<FloatingProps>`
  position: absolute;
  background-image: url('/Cloud.png'); // Path to your cloud image
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${float} ${props => props.duration}s linear infinite;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.75}px;
  left: ${props => props.x}%;
  bottom: -${props => props.size * 0.75}px;
  z-index: -1;
`;

const Journal = () => {
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch('/api/journal-entries'); // API endpoint
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setJournalEntries(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  const numBubbles = 10;
  const numClouds = 5;

  const bubbles = Array.from({ length: numBubbles }, (_, i) => ({
    key: i,
    duration: Math.random() * 10 + 5,
    size: Math.random() * 30 + 20,
    x: Math.random() * 100,
  }));

  const clouds = Array.from({ length: numClouds }, (_, i) => ({
    key: i,
    duration: Math.random() * 15 + 10,
    size: Math.random() * 80 + 50,
    x: Math.random() * 100,
  }));

  return (
    <JournalContainer>
      <JournalTitle>My Journal</JournalTitle>
      <NotebookBackground>
        <EntryList>
          {journalEntries?.map((entry) => (
            <EntryItem key={entry._id}>
              <EntryLink href={`/journal/${entry.slug}`}>
                {entry.title}
                <EntryDate>{new Date(entry.date).toLocaleDateString()}</EntryDate>
              </EntryLink>
            </EntryItem>
          ))}
        </EntryList>
      </NotebookBackground>

      {bubbles.map(bubble => (
        <Bubble key={bubble.key} duration={bubble.duration} size={bubble.size} x={bubble.x} />
      ))}

      {clouds.map(cloud => (
        <Cloud key={cloud.key} duration={cloud.duration} size={cloud.size} x={cloud.x} />
      ))}
    </JournalContainer>
  );
};

export default Journal;