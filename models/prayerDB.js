const mongoose = require("mongoose");
const slugify = require('slugify');

// mongodb schema
const ahadithSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A product must have a title'],
        maxlength: [40, 'A product name must have less or equal then 40 characters'],
        minlength: [5, 'A product name must have more or equal then 5 characters']
    }
);

// the mongoose modal
const Hadith = mongoose.model('Hadith', ahadithSchema);

module.exports = Hadith;
