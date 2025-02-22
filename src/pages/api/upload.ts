import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises'; // Import the fs promises API

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parser
  },
};

const form = formidable({
    // Set file upload directory
    uploadDir: path.join(process.cwd(), "/public/uploads"),
    // Allow multiple files to be uploaded
    multiples: true,
    filename: (name, ext, part, form) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        return part.name + "-" + uniqueSuffix + ext;
    }
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const [fields, files] = await form.parse(req); // Use await with form.parse

      const imageUrls = (files.image as formidable.File[]).map((file) => {
        return `/uploads/${file.newFilename}`; // Construct URL (adjust as needed)
      });


      res.status(200).json({ imageUrls }); // Send back the array of image URLs
    } catch (err) {
      console.error("Formidable Error:", err);
      res.status(500).json({ error: 'File upload failed.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}