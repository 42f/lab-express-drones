const express = require('express');
const { render } = require('../app.js');
const Drone = require('../models/Drone.model.js');
const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await Drone.find({});
    res.render('drones/list', { drones: allDrones });
  } catch (error) {
    res.send(`Something went wrong: ${error}`)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await Drone.create(req.body);
    res.redirect('/drones');
  } catch (error) {
    console.log(error)
    next(error);
  }

});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const updateDrone = await Drone.findById(req.params.id);
    console.log('upade', updateDrone);
    res.render('drones/update-form', updateDrone);
  } catch (error) {
    console.log(error)
    next(error);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await Drone.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
    });
    res.redirect('/drones');
  } catch (error) {
    console.log(error)
    next(error);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect('/drones');
  } catch (error) {
    console.log(error)
    next(error);
  }
});

module.exports = router;
