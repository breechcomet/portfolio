// src/pages/admin/journal/create.tsx
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const CreateContainer = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  cursor: pointer;
`;

const ImageUpload = ({ onImageUpload }: { onImageUpload: (urls: string[]) => void }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previewURLs, setPreviewURLs] = useState<string[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        setSelectedFiles(Array.from(files));
        setPreviewURLs(Array.from(files).map((file) => URL.createObjectURL(file)));
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) return;

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append('image', file);
        });

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                onImageUpload(data.imageUrls);
                setSelectedFiles([]);
                setPreviewURLs([]);
            } else {
                console.error("Upload failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            {previewURLs.map((url, index) => (
                <img key={index} src={url} alt="Preview" style={{ maxWidth: '200px', margin: '0.5rem' }} />
            ))}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};


const CreateJournalEntry = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [slug, setSlug] = useState('');
    const [message, setMessage] = useState('');
    const [images, setImages] = useState<string[]>([]);

    const handleImageUpload = (imageUrls: string[]) => {
        setImages([...images, ...imageUrls]);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/journal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, slug, images }),
            });

            if (response.ok) {
                setMessage('Journal entry created successfully!');
                setTitle('');
                setContent('');
                setSlug('');
                setImages([]); // Clear images after successful upload
            } else {
                const data = await response.json();
                setMessage(data.message || 'Error creating journal entry.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        <CreateContainer>
            <h1>Create Journal Entry</h1>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="title">Title:</Label>
                <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <Label htmlFor="slug">Slug:</Label>
                <Input type="text" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />

                <Label htmlFor="content">Content:</Label>
                <ReactQuill value={content} onChange={setContent} />

                <ImageUpload onImageUpload={handleImageUpload} />

                <Button type="submit">Create</Button>
                {message && <p>{message}</p>}
            </Form>
        </CreateContainer>
    );
};

export default CreateJournalEntry;