import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({
            User: newUser,
            message: 'User created successfully',
        });

    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

