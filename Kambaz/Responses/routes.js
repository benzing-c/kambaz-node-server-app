import * as responsesDao from "./dao.js";
export default function ResponseRoutes(app) {

    const findResponsesForUser = async (req, res) => {
        const { userId } = req.params;
        const response = await responsesDao.findResponsesForUser(userId);
        res.json(response);
    }; app.get("/api/responses/:userId", findResponsesForUser);

    const createResponse = async (req, res) => {
        const response = req.body;
        const newResponse = await responsesDao.createResponse(response);
        res.send(newResponse);
    }; app.post("/api/responses", createResponse);

    const deleteResponsesForUser = async (req, res) => {
        const { userId } = req.params;
        const status = await responsesDao.deleteResponsesForUser(userId);
        res.send(status);
    }; app.delete("/api/responses/:userId", deleteResponsesForUser);
}