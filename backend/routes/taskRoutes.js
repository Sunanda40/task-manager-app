const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(
  __dirname,
  "../data/task.json"
);

function readTasks() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(tasks, null, 2)
  );
}

/* GET ALL TASKS */
router.get("/", (req, res) => {
  const tasks = readTasks();

  res.json(tasks);
});

/* CREATE TASK */
router.post("/", (req, res) => {
  const { title, description, status } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    title,
    description,
    status
  };

  tasks.push(newTask);

  writeTasks(tasks);

  res.status(201).json(newTask);
});

/* UPDATE TASK */
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const tasks = readTasks();

  const index = tasks.findIndex(
    task => task.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks[index] = {
    ...tasks[index],
    ...req.body
  };

  writeTasks(tasks);

  res.json(tasks[index]);
});

/* DELETE TASK */
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const tasks = readTasks();

  const updatedTasks = tasks.filter(
    task => task.id !== id
  );

  writeTasks(updatedTasks);

  res.json({
    message: "Task deleted"
  });
});

module.exports = router;