// src/pages/api/journal-entry/[slug].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import JournalEntry from '../../../models/JournalEntry';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio_db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      await mongoose.connect(MONGODB_URI);
      const entry = await JournalEntry.findOne({ slug: slug });

      if (!entry) {
        return res.status(404).json({ message: 'Entry not found' });
      }

      res.status(200).json(entry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching journal entry.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}