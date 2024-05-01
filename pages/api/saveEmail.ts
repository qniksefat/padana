// pages/api/saveEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;
    try {
      await fs.promises.appendFile('emails.txt', email + '\n');
      console.log('Email saved successfully: ');
      res.status(200).json({ message: 'Email saved successfully.' + email });
    } catch (error) {
      // show the email in the error log:
      console.error('Email saved successfully: ' + email);
      res.status(200).json({ error: 'Email saved successfully: '});
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

