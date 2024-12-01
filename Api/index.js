// express Js
const express = require("express");
// Body Parser
const bodyParser = require("body-parser");
// Cors For Handling CORS ORIGIN Block
const cors = require("cors");
// Variables
const TOURS = require("./Tours");
const Vehicles = require("./Vehicles");
const TrendingTours = require("./TrendingTours");
const FeedBacks = require("./FeedBacks");
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Filtered Lists
const Plane = TOURS.filter((i) => i.transportationVehicle === "Plane");
const Train = TOURS.filter((i) => i.transportationVehicle === "Train");
const Boat = TOURS.filter((i) => i.transportationVehicle === "Boat");
const Bus = TOURS.filter((i) => i.transportationVehicle === "Bus");
const HasSpecial = TOURS.filter((i) => i.hasSpecialOffer);
// response section
app.get("/SpecialOffers", (req, res) => {
  res.json(HasSpecial);
});
app.get("/Tours", (req, res) => {
  res.json(TOURS);
});
app.get("/Vehicles/Plane", (req, res) => {
  res.json(Plane);
});
app.get("/Vehicles/Train", (req, res) => {
  res.json(Train);
});
app.get("/Vehicles/Boat", (req, res) => {
  res.json(Boat);
});
app.get("/Vehicles/Bus", (req, res) => {
  res.json(Bus);
});
app.get("/trendingTours", (req, res) => {
  res.json(TrendingTours);
});
app.get("/CostumerFeedbacks", (req, res) => {
  res.json(FeedBacks);
});
app.get("/Vehicles", (req, res) => {
  res.json(Vehicles);
});
app.get("/Tour/:tourId", (req, res) => {
  const id = req.params.tourId;
  res.json(TOURS[id]);
});
// Port Selection
app.listen(5000, () => {
  console.log("API server is listening to port 5000");
});
