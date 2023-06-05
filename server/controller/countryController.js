import { Country } from "../models/countryModel.js"


export const countryController = {
    getAll: (req, res) => {
        let limitCountry = req.query.limit
        Country.find()
            .limit(limitCountry)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    },
    getById: (req, res) => {
        let id = req.params.id
        Country.findById(id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    },
    addCountry: (req, res) => {
        const newCountry = new Country({
            name: req.body.name
        })
        newCountry.save();
        res.send(newCountry)

    },
    deleteCountry: (req, res) => {
        let id = req.params.id
        Country.findByIdAndDelete(id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    }
}