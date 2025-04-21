import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    _id: String,
    title: String,
    quiz: { type: String, ref: "QuizModel" },
    question: String,
    points: Number,
    answers: [String], // list of choices --- not used for true/false
    correct: String, // single correct answer --- not used for FitB, as all above answers are 'correct'
    type: {
        type: String,
        enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
        default: "Multiple Choice",
    },
    },
    { collection: "questions" }
);
export default questionSchema;