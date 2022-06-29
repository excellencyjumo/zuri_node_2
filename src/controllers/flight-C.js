const Flights = require('../models/flight-M')

//add new flight
addFlight = (req,res)=>{
    const flightIndex = Flights.findIndex(x=>x.id==req.body.id)
    if(flightIndex==-1){
    Flights.push(req.body)
    res.status(200).json("Successful")}
    else{
    res.status(400).json("Flight with the same ID already exists")
    }
}
//get a single flight 
getFlight = (req,res)=>{
    const flights = Flights.find(x=>x.id==req.params.id);
    if(flights){res.status(200).json(flights);}
    else{res.status(400).send("Flight Not Found")}
}
//get all flights 
getAllFlight = (req,res)=>{
    const flights = Flights;
    if(flights.length==0){res.send("No Flight Schedule yet")}
    else{res.status(200).json(flights);}
}
//update/edit a flight
editFlight = (req,res)=>{
    const flightIndex = Flights.findIndex(flight=>flight.id==req.params.id);
    if (flightIndex==-1) {res.status(400).json("Flight Not Available");return;}
    const flightUpdate = req.body;
    Flights.splice(flightIndex,1,flightUpdate)
    res.status(200).json("Successful Update");
}
//delete a flight
deleteFlight = (req,res)=>{
    const flightIndex = Flights.findIndex((flight)=>flight.id ===+req.params.id);
    if (flightIndex==-1) {res.status(400).json("Flight Not Available");return;}
    Flights.splice(flightIndex, 1);
    res.status(200).json("Successful");
  }
//export modules
module.exports={getAllFlight,addFlight,getFlight,editFlight,deleteFlight}