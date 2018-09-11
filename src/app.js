const SolarSystem = require('./models/solar_system.js');
const planetsData = require('./data/planets.js');
const SelectView = require('./views/select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const planetInfoView = new PlanetInfoView();
  planetInfoView.bindEvents();
  
  const selectView = new SelectView();
  selectView.bindEvents();

  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();


});
