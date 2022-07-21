import joi from 'joi';

const createObituaryJoiSchema = joi.object({
    deceased: joi.string().trim().required().messages({
        'any.required': '고인 성함은 반드시 작성해야 합니다.',
        'string.empty': '고인 성함은 빈 값일 수 없습니다.',
    }),
    dateOfBirth: joi
        .date()
        .min('1900-01-01')
        .max('now')
        .iso()
        .required()
        .messages({
            'any.required': '생년월일은 반드시 입력되어야 합니다.',
            'date.base': '날짜 데이터가 아닙니다.',
            'date.min': '생년월일은 1990년 1월 1일 이전일 수 없습니다.',
            'date.max': '생년월일은 오늘 이후일 수 없습니다.',
            'date.format': '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)',
        }),
    dateOfDeath: joi
        .date()
        .min(joi.ref('dateOfBirth'))
        .max('now')
        .iso()
        .required()
        .messages({
            'any.required': '임종일은 반드시 입력되어야 합니다.',
            'date.base': '날짜 데이터가 아닙니다.',
            'date.min': '임종일은 생년월일 이전일 수 없습니다.',
            'date.max': '임종일은 오늘 이후일 수 없습니다.',
            'date.format': '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)',
        }),
    age: joi.number().required().messages({
        'any.required': '나이는 반드시 작성해야 합니다.',
        'number.base': '나이는 숫자 형식이어야 합니다.',
    }),
    sex: joi.string().valid('남자', '여자').required().messages({
        'any.required': '성별은 반드시 작성해야 합니다.',
        'string.empty': '성별은 빈 값일 수 없습니다.',
        'any.only': '성별은 남자 혹은 여자이어야 합니다.',
    }),
    family: joi
        .array()
        .items(
            joi
                .object()
                .keys({
                    relation: joi.string().trim().required().messages({
                        'any.required':
                            '고인과의 관계는 반드시 작성해야 합니다.',
                        'string.empty': '고인과의 관계는 빈 값일 수 없습니다.',
                    }),
                    fullName: joi.string().trim().required().messages({
                        'any.required': '상주명은 반드시 작성해야 합니다.',
                        'string.empty': '상주명은 빈 값일 수 없습니다.',
                    }),
                })
                .required()
                .messages({
                    'object.unknown':
                        '상주 정보에 허용되지 않은 정보가 담겨있습니다.',
                }),
        )
        .required()
        .messages({
            'any.required': '상주 리스트는 반드시 작성해야 합니다.',
            'array.base': '상주 리스트는 배열 형식이어야 합니다.',
            'array.includesRequiredUnknowns':
                '한명 이상의 상주가 등록되어야 합니다.',
            'object.base': '상주는 객체의 형태로 삽입되어야 합니다.',
        }),
    funeral: joi.string().trim().required().messages({
        'any.required': '장례식장 주소는 반드시 작성해야 합니다.',
        'string.empty': '장례식장 주소는 빈 값일 수 없습니다.',
    }),
    dateOfCremate: joi.date().min(joi.ref('dateOfDeath')).iso().messages({
        'date.base': '날짜 데이터가 아닙니다.',
        'date.min': '발인일은 임종일 이전일 수 없습니다.',
        'date.format': '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)',
    }),
    comment: joi.string().trim().min(10).messages({
        'string.empty': '전할말로 빈 값을 전달할 수 없습니다.',
        'string.min': '전할말은 10자 이상이어야 합니다.',
    }),
    password: joi.string().trim().min(4).required().messages({
        'any.required': '비밀번호는 반드시 작성해야 합니다.',
        'string.empty': '비밀번호는 빈 값일 수 없습니다.',
        'string.min': '비밀번호는 4자 이상이어야 합니다.',
    }),
});

const updateObituaryJoiSchema = joi.object({
    deceased: joi.string().trim().messages({
        'string.empty': '고인 성함은 빈 값일 수 없습니다.',
    }),
    dateOfBirth: joi
        .date()
        .min('1900-01-01')
        .max('now')
        .iso()
        .required()
        .messages({
            'any.required': '생년월일은 반드시 입력되어야 합니다.',
            'date.base': '날짜 데이터가 아닙니다.',
            'date.min': '생년월일은 1990년 1월 1일 이전일 수 없습니다.',
            'date.max': '생년월일은 오늘 이후일 수 없습니다.',
            'date.format': '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)',
        }),
    dateOfDeath: joi
        .date()
        .min(joi.ref('dateOfBirth'))
        .max('now')
        .iso()
        .required()
        .messages({
            'any.required': '임종일은 반드시 입력되어야 합니다.',
            'date.base': '날짜 데이터가 아닙니다.',
            'date.min': '임종일은 생년월일 이전일 수 없습니다.',
            'date.max': '임종일은 오늘 이후일 수 없습니다.',
            'date.format': '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)',
        }),
    age: joi.number().required().messages({
        'any.required': '나이는 반드시 작성해야 합니다.',
        'number.base': '나이는 숫자 형식이어야 합니다.',
    }),
    sex: joi.string().valid('남자', '여자').messages({
        'string.empty': '성별은 빈 값일 수 없습니다.',
        'any.only': '성별은 남자 혹은 여자이어야 합니다.',
    }),
    family: joi
        .array()
        .items(
            joi
                .object()
                .keys({
                    relation: joi.string().trim().required().messages({
                        'any.required':
                            '고인과의 관계는 반드시 작성해야 합니다.',
                        'string.empty': '고인과의 관계는 빈 값일 수 없습니다.',
                    }),
                    fullName: joi.string().trim().required().messages({
                        'any.required': '상주명은 반드시 작성해야 합니다.',
                        'string.empty': '상주명은 빈 값일 수 없습니다.',
                    }),
                })
                .required()
                .messages({
                    'object.unknown':
                        '상주 정보에 허용되지 않은 정보가 담겨있습니다.',
                }),
        )
        .messages({
            'array.base': '상주 리스트는 배열 형식이어야 합니다.',
            'array.includesRequiredUnknowns':
                '한명 이상의 상주가 등록되어야 합니다.',
            'object.base': '상주는 객체의 형태로 삽입되어야 합니다.',
        }),
    funeral: joi.string().trim().messages({
        'string.empty': '장례식장 주소는 빈 값일 수 없습니다.',
    }),
    dateOfCremate: joi.date().min(joi.ref('dateOfDeath')).iso().messages({
        'date.base': '날짜 데이터가 아닙니다.',
        'date.min': '발인일은 임종일 이전일 수 없습니다.',
        'date.format': '올바른 날짜 형식이 아닙니다. (yyyy-mm-dd)',
    }),
    comment: joi.string().trim().min(10).messages({
        'string.empty': '전할말로 빈 값을 전달할 수 없습니다.',
        'string.min': '전할말은 10자 이상이어야 합니다.',
    }),
    password: joi.string().trim().min(4).required().messages({
        'any.required': '비밀번호는 반드시 작성해야 합니다.',
        'string.empty': '비밀번호는 빈 값일 수 없습니다.',
        'string.min': '비밀번호는 4자 이상이어야 합니다.',
    }),
});

export { createObituaryJoiSchema, updateObituaryJoiSchema };
