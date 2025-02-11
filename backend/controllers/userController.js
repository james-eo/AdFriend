import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ username, email, password });

  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({ message: 'User logged in successfully' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};