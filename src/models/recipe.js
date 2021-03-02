const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    recipe: { type: String, required: true },
    ingredients: [{
        ingredient: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
        quantity: {type: Number, required: false},
        quantityType: {type: String, required: false}
    }],
    vegetarian: { type: Boolean, default: false },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdDate: { type: Date, default: Date.now }
});
