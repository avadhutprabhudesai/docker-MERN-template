const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
});

const Task = model('task', taskSchema);

module.exports = Task;
