const IO = require("../utils/Io")
const Feedbacks = new IO("./database/feedback.json")
const Feedback = require("../models/feedback")
const { createV, updateV, deleteAndGetByIdV } = require("../validation/feedback")

const create = async (req, res) => {
    try {
        const { name, job, text, photo } = req.body;
        const error = createV({ name, job, text })
        if (error) return res.status(400).json({ message: error.message });
        const feedbacks = await Feedbacks.read()
        const feedback = new Feedback(name, job, text, photo);
        const result = feedbacks.length ? [...feedbacks, feedback] : [feedback]
        await Feedbacks.write(result)

        res.status(201).json({ message: "succesfull" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const update = async (req, res) => {
    try {
        const { name, job, text, photo } = req.body;
        const { id } = req.params;
        const error = updateV({ id, name, job, text })
        if (error) return res.status(400).json({ message: error.message });

        const feedbacks = await Feedbacks.read()
        const findFeedback = feedbacks.find((feedback) => feedback.id == id)
        if (!findFeedback) {
            return res.status(403).json({ message: "Bunday idli feedback yoq" })
        }
        name ? findFeedback.name = name : findFeedback.name = findFeedback.name;
        job ? findFeedback.job = job : findFeedback.job = findFeedback.job;
        text ? findFeedback.text = text : findFeedback.text = findFeedback.text;
        photo ? findFeedback.photo = photo : findFeedback.photo = findFeedback.photo;

        await Feedbacks.write(feedbacks)

        res.status(201).json({ message: "succesfull" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const deleted = async (req, res) => {
    try {
        const { id } = req.params;
        const error = deleteAndGetByIdV(id)
        if (error) return res.status(400).json({ message: error.message });
        const feedbacks = await Feedbacks.read()
        const data = feedbacks.filter((feedback) => { return feedback.id != id })
        await Feedbacks.write(data)
        res.status(201).json({ message: "success" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}


const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const error = deleteAndGetByIdV(id)
        if (error) return res.status(400).json({ message: error.message });

        const feedbacks = await Feedbacks.read()
        const findFeedback = feedbacks.find((feedback) => feedback.id == id)
        if (!findFeedback) {
            return res.status(403).json({ message: "Bunday idli feedback yoq" })
        }

        res.status(201).json({ data: findFeedback })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const getAll = async (req, res) => {
    try {
        const feedbacks = await Feedbacks.read()
        res.status(201).json({ data: feedbacks })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



module.exports = {
    getById,
    getAll,
    create,
    update,
    deleted
}