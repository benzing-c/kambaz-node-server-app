import * as quizzesDao from "./dao.js";
import * as questionsDao from "../QuizQuestions/dao.js";
export default function QuizRoutes(app) {
    app.put("/api/quizzes/:quizId/publish", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.togglePublished(quizId);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });

    const findQuestionsForQuiz = async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionsDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    }; app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);

    const createQuestionForQuiz = async (req, res) => {
            const { quizId } = req.params;
            const question = {
                quiz: quizId,
                title: "New Question",
                points: 10
            };
            const newQuestion = await questionsDao.createQuestion(question);
            res.send(newQuestion);
        }; app.post("/api/quizzes/:quizId/questions", createQuestionForQuiz);
}