import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('your_database_name');
    const data = await db.collection('your_collection_name').find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Connection failed' });
  }
}
