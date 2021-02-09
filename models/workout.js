const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter the type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the exercise name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter the duration time"
            },
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
