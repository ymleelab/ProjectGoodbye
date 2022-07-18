import { Schema } from 'mongoose';

export interface IFamily {
    relation: string;
    fullName: string;
}

export interface IObituary {
    deceased: string;
    dateOfBirth: string;
    dateOfDeath: string;
    age: number;
    family: Array<IFamily>;
    funeral: string;
    dateOfCremate: string;
    password: string;
}

const FamilySchema: Schema<IFamily> = new Schema(
    {
        relation: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
    },
    {
        _id: false,
        timestamps: false,
    },
);

const ObituarySchema: Schema<IObituary> = new Schema(
    {
        deceased: {
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
        age: {
            type: Number,
            required: true,
        },
        family: {
            type: [FamilySchema],
            required: true,
        },
        funeral: {
            type: String,
            required: true,
        },
        dateOfCremate: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'obituaries',
        timestamps: true,
    },
);

export { ObituarySchema };
