const Joi = require('joi');

exports.signupSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] },
        })
    ,
    password: Joi.string()
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
        .messages({
            "string.pattern.base": "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be at least 8 characters long."
        }),
});

exports.signinSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] },
        }),
    password: Joi.string()
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
        .messages({
            "string.pattern.base": "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be at least 8 characters long."
        }),
});

exports.acceptCodeSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] },
        }),
    providedCode: Joi.number().required(),
});

exports.changePasswordSchema = Joi.object({
    newPassword: Joi.string()
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
        .messages({
            "string.pattern.base": "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be at least 8 characters long."
        }),
    oldPassword: Joi.string()
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
});

exports.acceptFPCodeSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] },
        }),
    providedCode: Joi.number().required(),
    newPassword: Joi.string()
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
        .messages({
            "string.pattern.base": "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be at least 8 characters long."
        }),
});

exports.createPostSchema = Joi.object({
    title: Joi.string().min(3).max(60).required(),
    description: Joi.string().min(3).max(600).required(),
    userId: Joi.string().required(),
});