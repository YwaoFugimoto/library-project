const express = require('express');
const router = express.Router()
const Author = require('../models/author');


// all authors route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const authors = await Author.find(searchOptions)
        res.render('authors/index', { 
            authors: authors, 
            searchOptions:req.query
        })
    }catch (error){
        res.redirect('/')
    }
})

// new author route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})


router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })

    try{
        const newAuthor = await author.save()
        res.redirect(`authors`)
    }catch (error) {
        res.render('authors/new',{
            author: author,
            errorMessage:'Error Creating Author...'
        })
    }

})

router.get('/:id', (req, res) => {
    res.send('Show author ' + req.params.id)
})

router.get('/:id/edit', (req, res) => {
    res.send('Edit author ' + req.params.id)
})

router.put('/:id', (req, res ) => {
    res.send('Update author ' + req.params.id)
})

router.delete('/:id', (req, res) => {
    res.send('Delete author ' + req.params.id)
})

module.exports = router 