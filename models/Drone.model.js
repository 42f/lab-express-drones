// Iteration #1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
	//  (name of the drone model, like General Atomics MQ-9 Reaper)
	name: String,
	//  (amount of propellers, like 4)
	propellers: Number,
	//  (meters per second for the drone's maximum speed, like 18)
	maxSpeed: Number,
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;


