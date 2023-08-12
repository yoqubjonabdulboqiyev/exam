const IO = require("../utils/Io")
const Contacts = new IO("./database/contact.json")
const Contact = require("../models/contact")
const { createV, updateV, deleteAndGetByIdV } = require("../validation/contact")

const create = async (req, res) => {
    try {
        const { name, phoneNumber, email, message } = req.body;
        const error = createV({ name, phoneNumber, email, message })
        if (error) return res.status(400).json({ message: error.message });

        const contacts = await Contacts.read()
        const contact = new Contact(name, phoneNumber, email, message);
        const result = contacts.length ? [...contacts, contact] : [contact]
        await Contacts.write(result)

        res.status(201).json({ message: "succesfull" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const update = async (req, res) => {
    try {
        const { name, phoneNumber, email, message } = req.body;
        const { id } = req.params;
        const error = updateV({ id, name, phoneNumber, email, message })
        if (error) return res.status(400).json({ message: error.message });

        const contacts = await Contacts.read()
        const findContact = contacts.find((contact) => contact.id == id)
        if (!findContact) {
            return res.status(403).json({ message: "Bunday idli contact yoq" })
        }
        name ? findContact.name = name : findContact.name = findContact.name;
        phoneNumber ? findContact.phoneNumber = phoneNumber : findContact.phoneNumber = findContact.phoneNumber;
        email ? findContact.email = email : findContact.email = findContact.email;
        message ? findContact.message = message : findContact.message = findContact.message;
        await Contacts.write(contacts)

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

        const contacts = await Contacts.read()
        console.log(contacts);
        let data = contacts.filter((contact) => { return contact.id != id })
        await Contacts.write(data)

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
        const contacts = await Contacts.read()
        const findContact = contacts.find((contact) => contact.id == id)
        if (!findContact) {
            return res.status(403).json({ message: "Bunday idli contact yoq" })
        }
        res.status(201).json({ data: findContact })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}



const getAll = async (req, res) => {
    try {
        const contacts = await Contacts.read()
        res.status(201).json({ data: contacts })
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