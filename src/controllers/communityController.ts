import { Request, Response } from 'express';
import Community from '../models/Community';

export const addCommunity = async (req: Request, res: Response) => {
  try {
    const newCommunity = new Community(req.body);
    await newCommunity.save();
    res.status(201).json({
      community: newCommunity,
      message: 'Community created successfully',
    });

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
