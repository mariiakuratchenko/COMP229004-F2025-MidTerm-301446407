const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema(
    {
        make: {
            type: String,
            required: 'Make is required',
            trim: true
        },
        model: {
            type: String,
            unique: true,
            required: 'Model is required',
            trim: true
        },
        year: {
            type: Number,
            required: 'Year is required'
        },
        kilometers: Number,
        doors: Number,
        seats: Number,
        color: String,
        price: Number,
        created: {
            type: Date,
            default: Date.now,
            immutable: true
        },
        updated: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "cars"
    }
);

// Ensure virtual fields are serialised.
CarSchema.set('toJSON', {
  versionKey:false
});

module.exports = mongoose.model("Car", CarSchema);