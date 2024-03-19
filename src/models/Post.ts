import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    title: string;
    summary?: string;
    body: string;
    author: string;
    community: string;
    likes: number;
    status: string;
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true, maxlength: 60 },
    summary: { type: String, maxlength: 150 },
    body: { type: String, required: true },
    author: { type: String, required: true },
    community: { type: mongoose.Schema.Types.ObjectId, required: true },
    likes: { type: Number, default: 0 },
    country: { type: String, required: true },
    status: { type: String, enum: ['Pending approval', 'Approved'], default: 'Pending approval' }
});

const Post = mongoose.model<IPost>('Post', PostSchema);
export default Post;
