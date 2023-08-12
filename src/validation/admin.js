const Joi = require('joi');

const registerV = (data) => {
    const { firstName, lastName, phoneNumber, password } = data;
    const phoneNumberRegex = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        phoneNumber: Joi.string().regex(phoneNumberRegex).required(),
        password: Joi.string().min(6).max(20).required()

    })
    const { error } = schema.validate({ firstName, lastName, phoneNumber, password })
    if (error) {
        return error
    }
    else return false
}


const loginV = (data) => {
    const { phoneNumber, password } = data;
    const phoneNumberRegex = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
    const schema = Joi.object({
        phoneNumber: Joi.string().regex(phoneNumberRegex).required(),
        password: Joi.string().min(6).max(20).required(),
    })
    const { error } = schema.validate({ phoneNumber, password })
    if (error) {
        return error
    }
    else return false
}

module.exports = {
    registerV,
    loginV
}