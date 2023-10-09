require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// register routes
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');


// express app
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());


// middleware 
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
  
// route handlers
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost/workout')
.then(() => {
  // listen  for requests
  app.listen(process.env.PORT, () => {
    console.log(`Connected to DB and listening on port ${process.env.PORT}!!!`);
  });
})
.catch(err => console.log(err));


