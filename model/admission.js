const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let admissionSchema = new Schema({
    post_seq: {
        type: String,
    },
    post_id: {
        type: Number,
    },
    date: {
        type: Date,
    },
    catagory: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    file: {
        type: String
    }
});

module.exports = mongoose.model('admission', admissionSchema);