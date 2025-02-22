// src/pages/api/journal-entries.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import JournalEntry from '../../models/JournalEntry';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://munashemoyo27:ewe2P8Q4FkfIMWoF@portfolio1cluster.bpgxn.mongodb.net/?retryWrites=true&w=majority&appName=portfolio1cluster"; // Replace with your MongoDB URI

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      await mongoose.connect(MONGODB_URI);
      const entries = await JournalEntry.find().sort({ date: -1 }); // Sort by date (newest first)
      res.status(200).json(entries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching journal entries.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}