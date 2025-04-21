import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findQuestionsForQuiz(quizId) {
    console.log("dao");
    console.log(quizId);
    return model.find({ quiz: quizId });
}

export function findQuestion(questionId) {
    return model.findOne({_id: questionId});
}

export function createQuestion(question) {
    const newQuestion = { ...question, _id: uuidv4() };
    console.log("made it");
    return model.create(newQuestion);
}

export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
}

export function updateQuestion(questionId, questionUpdates) {
    console.log("hey");
    return model.updateOne({ _id: questionId }, questionUpdates);
}

// export function togglePublished(quizId) {
//     const quiz = model.findOne({_id: quizId});
//     console.log("test15");
//     console.log(quiz);
//     console.log(quiz.published);
//     console.log(!quiz.published);
//     return model.updateOne({ _id: quizId }, {published: !quiz.published});
// }