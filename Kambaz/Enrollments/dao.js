import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
    const newEnrollment = { course: courseId, user: userId, _id: uuidv4() };
    return model.create(newEnrollment);
}

export function deleteEnrollment(userId, courseId) {
    return model.deleteOne({ user: userId, course: courseId });
}

export function getAllEnrollments() {
    return model.find();
}

export function findUsersForCourse(courseId) {
    return model.find({ course: courseId }).populate("user");
}