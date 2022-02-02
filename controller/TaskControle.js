const req = require("express/lib/request");
const res = require("express/lib/response");
const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasklist = await Task.find();
    return res.render("index", {tasklist, task: null});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res ) => {
  const task = await Task.findOne( { _id: req.param.id });
  const tasklist = await Task.find();

  res.render("index", {task, tasklist});
}

module.exports = {
  getAllTasks,
  createTask,
  getById,
};
