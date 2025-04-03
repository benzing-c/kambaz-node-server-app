import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await enrollmentsDao.deleteEnrollment(userId, courseId);
        res.send(status);
    });
    app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.getAllEnrollments();
        res.send(enrollments);
    });
}