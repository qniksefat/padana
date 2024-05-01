// pages/api/saveEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;
    try {
      await fs.promises.appendFile('emails.txt', email + '\n');
      console.log('Email saved successfully.');
      res.status(200).json({ message: 'Email saved successfully.' });
    } catch (error) {
      console.error('Error saving email:', error);
      res.status(500).json({ error: 'An error occurred while saving the email.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

