const mongoose = require('mongoose');
const { Schema } = mongoose;

const addPetSchema = new Schema({
    ownerName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    petName: {
        type: String
    },
    petAge: {
        type: Number,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    petBreed: {
        type: String,
        required: true
    },
    petGender: {
        type: String,
        required: true
    },
    vaccinationStatus: {
        type: String,
        required: true
    },
    petDescription: {
        type: String
    },
    reason: {
        type: String
    },
    adoptionOrSale: {
        type: String,
        required: true
    },
    petPrice: {
        type: Number
    }
});

const AddPet = mongoose.model('AddPet', addPetSchema);

module.exports = AddPet;

// sets up the structure and behavior for storing pet data in a MongoDB database using Mongoose. It ensures that the data adheres to the defined schema, including required fields and data types.