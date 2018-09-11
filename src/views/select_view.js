const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(){

};

SelectView.prototype.bindEvents = function(){
  console.log("banana1");

  PubSub.subscribe('SolarSystem:all-planets-ready', (event) =>{
    console.log("banana2");

    const  allPlanets = event.detail;
    const planetLinks = document.querySelectorAll('li.planet-menu-item');
    for (var i = 0; i < planetLinks.length; i++){
      console.log("banana-loop");

      planetLinks[i].addEventListener('click', handlePlanetLink);
    }
  });
}

const handlePlanetLink = function(event){
  const nameOfPlanet = event.target.id;
  console.log("banana" + nameOfPlanet);
  PubSub.publish('SelectView:selected-planet-ready', nameOfPlanet);
}


module.exports = SelectView;
