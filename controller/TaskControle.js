const Task = require("../models/Task");

let message = "";
let type = "";

const getAllTasks = async (req, res) => {
  try {
    setTimeout( () => {
                        message=""
                      }, 1000
              );
              
    const tasklist = await Task.find();
    return res.render("index", { 
      task: null, 
      taskDelete: null, 
      tasklist,
      message,
      type
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira o texto da tarefa!"
    type = "danger"
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Tarefa criada com sucesso.";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const tasklist = await Task.find();
    if (req.params.method == "updateOne") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { 
                            task, 
                            taskDelete: null, 
                            tasklist, 
                            message, 
                            type 
                          }
            );
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { 
                            task: null, 
                            taskDelete, 
                            tasklist,
                          message, 
                          type }
                );

    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa atualizada com sucesso!";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    message = "Tarefa removida com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
};
