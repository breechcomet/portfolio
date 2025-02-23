// src/pages/journal/[slug]/index.tsx
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

interface JournalEntryData {
  title: string;
  date: string;
  content: string;
  images: string[];
}

const EntryContainer = styled.div`
  padding: 4rem;
  min-height: calc(100vh - 60px);
  background-color: #f5f0e6;
  color: #5c3a21;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const EntryDate = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const EntryContent = styled.div`
  max-width: 800px;
  width: 100%;
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1rem auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    margin-bottom: 1rem;
  }
  ul,
  ol {
    padding-left: 20px;
    margin-bottom: 1rem;
  }
  blockquote {
    border-left: 5px solid #d3cbb6;
    padding: 1rem;
    margin: 1rem 0;
    font-style: italic;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 8px;
  }
`;

const NotebookBackground = styled.div`
  background-image: url('/Notebook.png');
  background-size: cover;
  background-repeat: repeat-y;
  padding: 2rem;
  border: 2px solid #d3cbb6;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  margin-bottom: 2rem;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryImage = styled.img`
  max-width: 300px;
  height: auto;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const JournalEntry = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [entry, setEntry] = useState<JournalEntryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEntry = async () => {
      if (!slug || typeof slug !== 'string') return;

      try {
        const res = await fetch(`/api/journal-entry/${slug}`);
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setEntry(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred.'));
        }
        console.error('Error fetching entry:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!entry) {
    return <div>Entry Not Found</div>;
  }

  const formattedDate = new Date(entry.date).toLocaleDateString();

  return (
    <EntryContainer>
      <NotebookBackground>
        <EntryTitle>{entry.title}</EntryTitle>
        <EntryDate>{formattedDate}</EntryDate>
        <EntryContent dangerouslySetInnerHTML={{ __html: entry.content }} />

        {entry.images && entry.images.length > 0 && (
          <ImageGallery>
            {entry.images.map((imageUrl, index) => (
              <GalleryImage key={index} src={imageUrl} alt={`Journal Image ${index + 1}`} />
            ))}
          </ImageGallery>
        )}
      </NotebookBackground>
    </EntryContainer>
  );
};

export default JournalEntry;