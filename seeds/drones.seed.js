// Iteration #1

require('../db/index.js')
const mongoose = require("mongoose");
const Drone = require('../models/Drone.model.js')

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

async function seedDrones() {
	try {
		await Drone.deleteMany();
		const seededDrones = await Drone.create(drones);
		console.log(`${seededDrones.length} drones were seeded.`);
		await mongoose.connection.close();
	} catch (err) {
		console.error(err);
	}
}

seedDrones();
