const express = require('express');

const workoutModel = require('../models/workoutModel');
const { 
    createWorkout, 
    getWorkouts, 
    getAWorkOut,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutController');

const router = express.Router();


// GET all workouts
router.get('/', getWorkouts);



// GET a single workout
router.get('/:id', getAWorkOut);

// POST a new workout
router.post('/', createWorkout);

// Delete a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;