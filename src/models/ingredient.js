const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
    name: { type: String, required: true },
    meat: { type: Boolean, default: false },
    description: {type: String, required: false },
    createdDate: { type: Date, default: Date.now }
});
