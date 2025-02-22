// src/models/JournalEntry.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface JournalEntry extends Document {
    title: string;
    content: string;
    date: Date;
    slug: string;
    images: string[]; // Array to store image URLs/paths
}

const JournalEntrySchema = new Schema<JournalEntry>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    slug: { type: String, required: true, unique: true },
    images: [{ type: String }], // Array of strings for image URLs/paths
});

export default mongoose.models.JournalEntry || mongoose.model<JournalEntry>('JournalEntry', JournalEntrySchema);