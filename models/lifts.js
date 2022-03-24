const mongoose = require('mongoose')

const liftSchema = new mongoose.Schema({
    lift: String,
    weight: Number,
    reps: Number,
    sets: Number,
    pr: Boolean
});

const Lift = mongoose.model('Lift', liftSchema);

module.exports = Lift;