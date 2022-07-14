import joi from 'joi';

const createRemembranceJoiSchema = joi.object({
    dateOfDeath: joi.date().required(),
});


export { createRemembranceJoiSchema };
