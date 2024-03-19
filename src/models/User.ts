import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    role?: 'super moderator' | 'moderator';
    email?: string;
    image?: string;
    country: string;
    communities: string[];
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    role: { type: String, enum: ['super moderator', 'moderator'] },
    email: { type: String },
    image: { type: String },
    country: { type: String, required: true },
    communities: [{ type: mongoose.Schema.Types.ObjectId }]
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
