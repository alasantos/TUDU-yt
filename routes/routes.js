const routes = require("express").Router();
const TaskController = require( "../controller/TaskControle")

routes.get( "/", TaskController.getAll)

module.exports =  routes