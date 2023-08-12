const Joi = require('joi');

const createV = (data) => {
    const { name, title } = data
    const schema = Joi.object({
        name: Joi.string().required(),
        title: Joi.string().required(),
    })
    const { error } = schema.validate({ name, title })
    if (error) {
        return error
    }
    else return error
}


const updateV = (data) => {
    const { id, name, title } = data;
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string(),
        title: Joi.string(),
    })
    const { error } = schema.validate({ id, name, title })
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