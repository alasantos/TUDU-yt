const routes = require("express").Router();
const TaskController = require("../controller/TaskControle");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id", TaskController.getById)

module.exports = routes;
