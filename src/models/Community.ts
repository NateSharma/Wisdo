import mongoose, { Schema, Document } from 'mongoose';

export interface ICommunity extends Document {
    title: string;
    image: string;
    memberCount: number;
}

const CommunitySchema: Schema = new Schema({
    title: { type: String, required: true, maxlength: 60 },
    image: { type: String, required: true },
    memberCount: { type: Number, default: 0 }
});

const Community = mongoose.model<ICommunity>('Community', CommunitySchema);
export default Community;
