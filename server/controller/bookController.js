import { Book } from "../models/bookModel.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from "fs"
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
            imgpath: path,
            writer: req.body.writer
        });

        newBook.save()
            .then(savedBook => res.status(201).json(savedBook))
            .catch(err => res.status(400).json(err));


    },
    deleteBookById: (req, res) => {
        console.log(req.body);
        const id = req.params.id;
        Book.findByIdAndDelete(id)
            .then((data) => {
                fs.unlink(data.imgpath, function (err) {
                    if (err && err.code == 'ENOENT') {

                        console.info("File doesn't exist, won't remove it.");
                    } else if (err) {

                        console.error("Error occurred while trying to remove file");
                    } else {
                        res.send(`removed`);
                    }
                });
            }


            )
            .catch(err => res.status(404).json(err))
    },
}