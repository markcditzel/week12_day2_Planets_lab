const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;

};


SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);


}



module.exports = SolarSystem;
