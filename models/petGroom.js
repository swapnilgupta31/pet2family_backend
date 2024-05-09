// petGroom.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const petGroomSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    petAge: {
        type: Number,
        required: true
    },
    petAddress: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    otherSuggestions: {
        type: String,
        required: false
    }
});

const PetGroom = mongoose.model('PetGroom', petGroomSchema);

module.exports = PetGroom;
