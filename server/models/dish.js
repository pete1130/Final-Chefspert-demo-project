const mongoose = require('mongoose');
const dishSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = { Dish };