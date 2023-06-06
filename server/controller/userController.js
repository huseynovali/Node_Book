import { User } from "../models/userModel.js";


export const userController = {
    getUser: (req, res) => {
        const userlimit = req.query.limit || 10;
        User.find()
        .populate("country")
            .limit(userlimit)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    },
    getUserById: (req, res) => {
        const userlimit = req.query.limit || 10;
        const id = req.params.id
        User.findById(id)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    },
    addUser: (req, res) => {

        let newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            brithday: req.body.brithday,
            country: req.body.country
        });

        newUser.save()
            .then(savedUser => res.status(201).json(savedUser))
            .catch(err => res.status(400).json(err));

    }
    ,

    deleteUser: (req, res) => {
        const id = req.params.id
        User.findByIdAndDelete(id)
            .then(() => res.json("delete"))
            .catch(err => res.status(404).json(err))
    },
};
