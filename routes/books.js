const express = require('express')
const router = express.Router()
const multer = require('multer')
const Book = require('../models/book')
const Author = require('../models/author')
// const upload = multer({
//     dest:
// })

route.get('/new', async (req, res) => {
    try{
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book
        })
    } catch (error){
        res.redirect('/books')
    }
})

// create book route
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        description: req.body.description
    })
})