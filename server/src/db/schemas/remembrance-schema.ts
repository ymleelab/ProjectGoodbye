import { Schema } from 'mongoose';
import { CommentSchema, IComment } from './comment-schema';

export interface IRemembrance {
    userId: string;
    fullName: string;
    dateOfBirth: string;
    dateOfDeath?: string;
    isPublic?: boolean;
    photo?: string;
    comments?: Array<IComment>;
}

const RemembranceSchema: Schema<IRemembrance> = new Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        dateOfDeath: {
            type: String,
            required: false,
        },
        isPublic: {
            type: Boolean,
            default: true,
        },
        photo: {
            type: String,
            required: false,
        },
        comments: {
            type: [CommentSchema],
            required: false,
        },
    },
    {
        collection: 'remembrances',
        timestamps: true,
    },
);

export { RemembranceSchema };
