// path: /api/get_quotes
import {connectToDatabase, disconnectFromDatabase} from '../../app/utils/db';
import { quoteModel } from '../../app/utils/models/Quote';

export default async function handler(req, res) {
 try {
  await connectToDatabase();
  const { method } = req;
  if(method === 'GET'){
   const quotes = await quoteModel.find();
   console.log('quotes called===========>');
   res.status(200).json(quotes);
   await disconnectFromDatabase();
  } else {
   res.setHeader('Allow', ['GET']);
   res.status(405).json({error: `Method ${method} Not Allowed`});
  }
 } catch (error) {
  console.error('Error occured getting quotes:', error);
  res.status(500).json({error: 'Error getting quotes'});
 }
}
