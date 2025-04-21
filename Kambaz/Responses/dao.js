import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findResponsesForUser(userId) {
    return model.find({ user: userId });
}

export function createResponse(response) {
    const newResponse = { ...response, _id: uuidv4() }
    return model.create(newResponse);
}

export function deleteResponsesForUser(userId) {
    return model.deleteMany({ user: userId });
}