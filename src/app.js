const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: "Initial task", completed: true },
  { id: 2, title: "Install Git and Node.js", completed: true },
  { id: 3, title: "Learn DevOps basics", completed: false }
];

// Welcome message from main branch
app.get('/', (req, res) => {
  res.json({ message: "Welcome from Main" });
});

// Refactored routing logic from feature branch
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(3000, () => console.log("API running on port 3000"));