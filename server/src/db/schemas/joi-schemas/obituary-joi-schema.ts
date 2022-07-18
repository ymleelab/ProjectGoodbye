import joi from 'joi';

const createObituaryJoiSchema = joi.object({
    deceased: joi.string().required(),
    dateOfBirth: joi.date().max(joi.ref('dateOfDeath')).iso().required(),
    dateOfDeath: joi
        .date()
        .min(joi.ref('dateOfBirth'))
        .max('now')
        .iso()
        .required(),
    age: joi.number().required(),
    family: joi.array().required(),
    funeral: joi.string().required(),
    dateOfCremate: joi.date().min(joi.ref('dateOfDeath')).iso().required(),
});

const updateObituaryJoiSchema = joi.object({
    deceased: joi.string(),
    dateOfBirth: joi.date().max(joi.ref('dateOfDeath')).iso(),
    dateOfDeath: joi.date().min(joi.ref('dateOfBirth')).max('now').iso(),
    age: joi.number(),
    family: joi.array(),
    funeral: joi.string(),
    dateOfCremate: joi.date().min(joi.ref('dateOfDeath')).iso(),
});

export { createObituaryJoiSchema, updateObituaryJoiSchema };
