const IO = require("../utils/Io")
const Services = new IO("./database/service.json")
const Service = require("../models/service")
const { createV, updateV, deleteAndGetByIdV } = require("../validation/service")

const create = async (req, res) => {
    try {
        const { name, title, photo } = req.body;
        const error = createV({ name, title })
        if (error) return res.status(400).json({ message: error.message });
        const services = await Services.read()
        const service = new Service(name, title, photo);
        const result = services.length ? [...services, service] : [service]
        await Services.write(result)

        res.status(201).json({ message: "succesfull" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const update = async (req, res) => {
    try {
        const { name, title, photo } = req.body;
        const { id } = req.params;
        const error = updateV({ id, name, title })
        if (error) return res.status(400).json({ message: error.message });

        const services = await Services.read()
        const findService = services.find((service) => service.id == id)
        if (!findService) {
            return res.status(403).json({ message: "Bunday idli service yoq" })
        }
        name ? findService.name = name : findService.name = findService.name;
        title ? findService.title = title : findService.title = findService.title;
        photo ? findService.photo = photo : findService.photo = findService.photo;
        await Services.write(services)

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

        const services = await Services.read()
        const data = services.filter((service) => { return service.id != id })
        await Services.write(data)

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

        const services = await Services.read()
        const findService = services.find((service) => service.id == id)
        if (!findService) {
            return res.status(403).json({ message: "Bunday idli service yoq" })
        }

        res.status(201).json({ data: findService })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const getAll = async (req, res) => {
    try {
        const services = await Services.read()
        res.status(201).json({ data: services })
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