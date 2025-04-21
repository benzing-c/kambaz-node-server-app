import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    due: Date,
    until: Date,
    available: Date,
    points: Number,
    description: String,
    published: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz",
    },
    group: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Projects"],
        default: "Quizzes",
    },
    shuffle: { 
        type: Boolean,
        default: true
    },
    time: {
        type: Number,
        default: 20 //time is given in minutes
    },
    numAttempts: {
        type: Number,
        default: 1
    },
    showCorrectAnswers: {
        type: Date,
        default: "1999-01-01T00:00:00.000+00:00"  
    },
    accessCode: {
        type: String,
        default: ""
    },
    oneAtATime: {
        type: Boolean,
        default: true
    },
    webcamRequired: {
        type: Boolean,
        default: false
    },
    lockQuestions: {
        type: Boolean,
        default: false
    },
    },
    { collection: "quizzes" }
);
export default quizSchema;