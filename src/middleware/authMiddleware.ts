import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                communities: string[];
            };
        }
    }
}

const dummyAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.headers.user_id as any | undefined;
    const communityId = req.headers.community_id as any | undefined;
    req.user = {
        id: userId,
        communities: communityId,
    };
    next();
};

export default dummyAuthMiddleware;
