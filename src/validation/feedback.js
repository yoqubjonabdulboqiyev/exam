const Joi = require('joi');

const createV = (data) => {
    const { name, job, text } = data
    const schema = Joi.object({
        name: Joi.string().required(),
        job: Joi.string().required(),
        text: Joi.string().required(),
    })
    const { error } = schema.validate({ name, job, text })
    if (error) {
        return error
    }
    else return error
}


const updateV = (data) => {
    const { id, name, job, text } = data
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string(),
        job: Joi.string(),
        text: Joi.string(),
    })
    const { error } = schema.validate({ id, name, job, text })
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