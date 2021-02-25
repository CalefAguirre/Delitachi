const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema ({
  name: {type: String, required: true}
})
