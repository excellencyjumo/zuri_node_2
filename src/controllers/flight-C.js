const Flights = require('../models/flight-M')

//add new flight
addFlight = (req,res)=>{
    Flights.push(req.body)
    res.status(200).json("Successful")
}
//get a single flight 
getFlight = (req,res)=>{
    const flights = Flights.find(x=>{x.id=req.params.id});
    res.status(200).json(flights);
}
//get all flights 
getAllFlight = (req,res)=>{
    const flights = Flights;
    if(!flights){res.send("No Flight Schedule yet")}
    res.status(200).json(flights);
}
//update/edit a flight
editFlight = (req,res)=>{
    const flightIndex = Flights.findIndex(flight=>{flight.id=req.params.id});
    const flightUpdate = req.body;
    Flights.splice(flightIndex,0,flightUpdate)
    res.status(200).json("Successful Update");
}
//delete a flight
deleteFlight = (req,res)=>{
    const flightIndex = Flights.findIndex((flight)=>flight.id === id);
    if (flightIndex === -1) {res.status(400).json("Flight Not Available");}
    Flights.splice(courseIndex, 1);
    res.status(200).json("Successful");
  }
//export modules
module.exports={getAllFlight,addFlight,getFlight,editFlight,deleteFlight}