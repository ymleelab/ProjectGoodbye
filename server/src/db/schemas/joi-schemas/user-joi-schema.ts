import joi from 'joi';

const registerJoiSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    fullName: joi.string().required(),
    password:joi.string().required().min(8),
    repeatPassword:joi.string().required().min(8),
    dateOfBirth: joi.date().required(),
});

export { registerJoiSchema };
