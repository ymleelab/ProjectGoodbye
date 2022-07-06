//user Schema
import { Schema } from 'mongoose';
import { willSchema } from './will-schema';
import { receiverSchema } from './receiver-schema';
const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            index: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        wills: [
            {
                type: willSchema,
                required: false,
            },
        ],
        receivers: [
            {
                type: receiverSchema,
                required: false,
            },
        ],
    },
    {
        collection: 'users',
        timestamps: true,
    },
);

export { UserSchema };
