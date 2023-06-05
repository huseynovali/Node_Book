import { Book } from "../models/bookModel.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
export const bookController = {
    getBook: (req, res) => {
        const userlimit = req.query.limit || 10;
        Book.find()
            .populate({
                path: 'writer',
                populate: {
                    path: 'country',

                }
            })
            .limit(userlimit)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    },
    getBookById: (req, res) => {
        const limitBook = req.query.limit || 10;
        const id = req.params.id;
        Book.findById(id)
            .limit(limitBook)
            .then(data => res.json(data))
            .catch(err => res.status(404).json(err))
    },
    addBook: (req, res) => {
        let file = req.files.photo;
        const currentFilePath = fileURLToPath(import.meta.url);
        const currentDirPath = dirname(currentFilePath);
        const path = join(currentDirPath, '..', "img", file.name);

        file.mv(path, function (err) {
            if (err) {
                return res.status(500).json(err);
            }
        })
        let newBook = new Book({
            name: req.body.name,
            description: req.body.description,
            publishDate: req.body.publishDate,
            date: new Date(),
            imgpath: file.name,
            writer: req.body.writer
        });

        newBook.save()
            .then(savedBook => res.status(201).json(savedBook))
            .catch(err => res.status(400).json(err));


    },
    deleteBookById: (req, res) => {

        const id = req.params.id;
        Book.findByIdAndDelete()

            .then(() => res.send("delete"))
            .catch(err => res.status(404).json(err))
    },
}