// path: app/components/footer.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YOUR_PAT = process.env.GITHUB_PAT;

type CommitData = {
    latestCommit: string;
    commitmessage: string;
};

const Footer = () => {
 const [Commit, setLatestCommit] = useState<CommitData>({ latestCommit: '', commitmessage: '' });

 useEffect(() => {
  const fetchLatestCommit = async () => {
   try {
    const response = await axios.get('/api/latest-commit', {
     headers: {
      Authorization: `Bearer ${YOUR_PAT}`,
     },
    });
    setLatestCommit(response.data);
   } catch (error) {
    throw new Error(`Error: ${error}`);
   }
  };

  fetchLatestCommit();
 }, []);

 return (
  <div className="footerm">
  </div>
 );
};

export default Footer;
