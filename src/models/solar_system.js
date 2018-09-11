const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;

};


SolarSystem.prototype.bindEvents = function(){
  console.log("SolarSystem bindevents");
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);

  PubSub.subscribe('SelectView:selected-planet-ready', (event) => {
    const selectedPlanetName = event.detail;
    // console.log('pineapple');

    // for (var i =0; i <this.planets.length; i++){
    //   if (this.planets[i].name === selectedPlanetName){
    //     console.log(this.planets[i])
    //   }
    //   // return planet;
    //   // console.log("banana-loop");
    // }
    const foundPlanet = this.planets.find((planet) => {
      return planet.name === selectedPlanetName
    })
    console.log(foundPlanet)
    PubSub.publish('SolarSystem:planet-selected-object', foundPlanet);
  })
};

module.exports = SolarSystem;
