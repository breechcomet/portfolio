// src/pages/api/journal.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import JournalEntry from '../../models/JournalEntry';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://munashemoyo27:ewe2P8Q4FkfIMWoF@portfolio1cluster.bpgxn.mongodb.net/?retryWrites=true&w=majority&appName=portfolio1cluster"; // Replace with your MongoDB URI

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await mongoose.connect(MONGODB_URI); // Connect to MongoDB

      const { title, content, slug, images } = req.body; // Include images

      const newEntry = new JournalEntry({ 
        title, 
        content, 
        slug, 
        images, // Save images
        date: new Date() 
      });

      await newEntry.save();
      res.status(201).json({ message: 'Journal entry created!' });
    } catch (error) {
      console.error("Error creating journal entry:", error);
      res.status(500).json({ message: 'Error creating journal entry.' });
    } finally {
      await mongoose.disconnect(); // Close connection after request
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}