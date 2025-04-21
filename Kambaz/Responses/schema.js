import mongoose from "mongoose";
const responseSchema = new mongoose.Schema({
    _id: String,
    user: { type: String, ref: "UserModel" },
    quiz: { type: String, ref: "QuizModel" },
    answers: [{
        question: {type: String, ref: "QuestionModel"},
        answer: String 
    }],
    attempt: { type: Number, default: 0 }
    },
    { collection: "responses" }
);
export default responseSchema;