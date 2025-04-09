const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// authorSchema.pre('deleteOne', function(next) {
//     const query = this.getFilter()
//     const Book = require('./book')
//     const books = Book.find({ author: query._id})
//     Book.exists({ author: this.id }, (err, books) => {
//         if( err ){
//             next(err)
//         } else if (books.length > 0) {
//             next(new Error('This author has books still'))
//         } else {
//             next ()
//         }
//     })
// })

authorSchema.pre("deleteOne", async function (next) {
    try {
        const query = this.getFilter();
        const Book = require('./book'); 
        const books = await Book.find({ author: query._id });
        if (books.length > 0) {
            next(new Error("This author still has books."));
        } else {
            next();
        }
    } catch (err) {
        next(err);  
    }
});

// authorSchema.pre("deleteOne", async function (next) {
//     try {
//         const query = this.getFilter();
//         const Book = require('./book')
//         const hasBook = await Book.find({ author: query._id });
//         if (hasBook) {
//             next(new Error("This author still has books."));
//         } else {
//             next();
//         }
//     } catch (err) {
//         next(err);
//     }
// });

module.exports = mongoose.model('Author', authorSchema)
