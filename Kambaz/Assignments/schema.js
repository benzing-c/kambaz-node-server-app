import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    due: Date,
    until: Date,
    points: String,
    description: String,
    },
    { collection: "assignments" }
);
export default assignmentSchema;