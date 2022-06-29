const express = require('express');
const router = express.Router();
const flight = require('../controllers/flight-C');

router.get('/flight', flight.getAllFlight)//get all flight
router.get('/flight/:id',flight.getFlight)//get a specific flight
router.post('/flight',flight.addFlight)//add new flight
router.put('/flight/:id',flight.editFlight)//edit/update a flight
router.delete('/flight/:id',flight.deleteFlight)//delete a flight
module.exports = router;
