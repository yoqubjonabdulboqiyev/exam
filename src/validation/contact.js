const Joi = require('joi');

const createV = (data) => {
    const { name, phoneNumber, email, message } = data
    const phoneNumberRegex = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    const schema = Joi.object({
        name: Joi.string().required(),
        phoneNumber: Joi.string().regex(phoneNumberRegex).required(),
        email: Joi.string().regex(emailRegex).required(),
        message: Joi.string().required(),
    })
    const { error } = schema.validate({ name, phoneNumber, email, message })
    if (error) {
        return error
    }
    else return error
}


const updateV = (data) => {
    const { id, name, phoneNumber, email, message } = data;
    const phoneNumberRegex = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string(),
        phoneNumber: Joi.string().regex(phoneNumberRegex),
        email: Joi.string().regex(emailRegex).required(),
        message: Joi.string(),
    })
    const { error } = schema.validate({ id, name, phoneNumber, email, message })
    if (error) {
        return error
    }
    else return error
}


const deleteAndGetByIdV = (id) => {
    const schema = Joi.object({
        id: Joi.string().required()
    })
    const { error } = schema.validate({ id })
    if (error) {
        return error
    }
    else return error
}

module.exports = {
    createV,
    updateV,
    deleteAndGetByIdV
}