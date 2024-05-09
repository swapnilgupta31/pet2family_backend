// petHouse.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const petHouseSchema = new Schema({
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
    duration: {
        type: Number, // Changed to match the HTML input name
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

const PetHouse = mongoose.model('PetHouse', petHouseSchema);

module.exports = PetHouse;
