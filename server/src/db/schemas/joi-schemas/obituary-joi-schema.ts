import joi from 'joi';

const createObituaryJoiSchema = joi.object({
    deceased: joi.string().required(),
    dateOfBirth: joi.date().required(),
    dateOfDeath: joi.date().required(),
    age: joi.number().required(),
    family: joi.array().required(),
    funeral: joi.string().required(),
    dateOfCremate: joi.date().required(),
});

const updateObituaryJoiSchema = joi.object({
    deceased: joi.string(),
    dateOfBirth: joi.date(),
    dateOfDeath: joi.date(),
    age: joi.number(),
    family: joi.array(),
    funeral: joi.string(),
    dateOfCremate: joi.date(),
});

export { createObituaryJoiSchema, updateObituaryJoiSchema };
