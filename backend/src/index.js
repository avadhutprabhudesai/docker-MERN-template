const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task');

async function initDB() {
  try {
    const url = `mongodb://mongodb/test`;
    await mongoose.connect(url, { useNewUrlParser: true });

    const app = express();

    app.use(cors());

    app.route('/tasks').get(async (req, res) => {
      const task = new Task({
        title: 'First task',
      });
      await task.save();
      const t = await Task.findOne();
      await Task.deleteMany();
      res.json({ title: 'Hello world' });
    });

    app.listen(4000, () => {
      console.log('Express server listening on port 4000');
    });
  } catch (error) {
    console.log('\n\nError while connecting to mongodb instance');
    console.log(error);
    throw error;
  }
}
initDB();
