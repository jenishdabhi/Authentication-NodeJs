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

exports.loginSchema = Joi.object({
    
})