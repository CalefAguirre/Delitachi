const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    favorite:[{
        type: Schema.Types.ObjectId,
        ref: "recipe"
    }],
    createdDate: { type: Date, default: Date.now }
});
