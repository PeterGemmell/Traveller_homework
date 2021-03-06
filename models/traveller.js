const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map((journey) => {
  return journey.startLocation;
})
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map((journey) => {
  return journey.endLocation;
});
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter((journey) => {
  return (journey.transport === transport);
});
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter((journey) => {
  return (journey.distance > minDistance);
});
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
const distances = this.journeys.map(journey => journey.distance);
return distances.reduce((runningTotal, total) => runningTotal + total);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.journeys.map(journey => journey.transport);
let transport = transports.filter((transport, i, ar) => ar.indexOf(transport) === i);
return transport;

};







module.exports = Traveller;
