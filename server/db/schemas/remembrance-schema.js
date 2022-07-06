import { Schema } from 'mongoose';
import { CommentSchema } from './comment-schema';

const RemembranceSchema = new Schema(
    {
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
            required: true,
        },
        isPublic: {
            type: Boolean,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        comments: [{
            type: CommentSchema,
            required: false,
        }],
    },
    {
        collection: 'remembrances',
        timestamps: true,
    }
);

export { RemembranceSchema };