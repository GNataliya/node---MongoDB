const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        maxLength: 350,
    },
    topic: {
        type: Schema.Types.String,
        maxLength: 200,
    },
    text: {
        type: Schema.Types.String,
        default: '',
    },
    autor: {
        type: Schema.Types.String,
    },
    createDate: {
        type: Schema.Types.Date,
        default: Date.now,
    }
});

const model = mongoose.model('article', generalSchema);
module.exports = model;