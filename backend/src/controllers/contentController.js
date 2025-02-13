import Content from '../models/contentModel.js';

export const getContent = async (req, res) => {
  const { type } = req.query;

  const content = await Content.find({ type });

  res.json(content);
};

export const addContent = async (req, res) => {
  const { type, content } = req.body;

  const newContent = new Content({ type, content });

  await newContent.save();

  res.status(201).json({ message: 'Content added successfully' });
};