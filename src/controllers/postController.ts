import { Request, Response } from 'express';
import Post from '../models/Post';
import User from '../models/User';

export const uploadPost = async (req: Request, res: Response) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json({
            User: newPost,
            message: 'Post upload successfully',
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getFeed = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const userCommunities = user.communities;
        const userCountry = user.country
        const posts = await Post.find({ community: { $in: userCommunities } })
        posts.sort((a, b) => b.likes - a.likes);
        posts.sort((a: any, b: any) => {
            if (a.country === userCountry && b.country !== userCountry) {
                return -1;
            } else if (a.country !== userCountry && b.country === userCountry) {
                return 1;
            } else {
                return 0;
            }
        });
        res.status(200).json({
            posts: posts,
            message: 'Reccommended post',
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
