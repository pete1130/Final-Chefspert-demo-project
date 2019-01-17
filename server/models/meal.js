const mongoose = require('mongoose');
const mealSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = { Meal };