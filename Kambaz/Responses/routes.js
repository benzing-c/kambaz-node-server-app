import * as responsesDao from "./dao.js";
export default function ResponseRoutes(app) {

    // const findQuestion = async (req, res) => {
    //     const { questionId } = req.params;
    //     const question = await questionsDao.findQuestion(questionId);
    //     res.json(question);
    // }; app.get("/api/questions/:questionId", findQuestion);

    // const updateQuestion = async (req, res) => {
    //     const { questionId } = req.params;
    //     const questionUpdates = req.body;
    //     const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    //     res.send(status);
    // }; app.put("/api/questions/:questionId", updateQuestion);

    // const deleteQuestion = async (req, res) => {
    //     const { questionId } = req.params;
    //     const status = await questionsDao.deleteQuestion(questionId);
    //     res.send(status);
    // }; app.delete("/api/questions/:questionId", deleteQuestion);
}