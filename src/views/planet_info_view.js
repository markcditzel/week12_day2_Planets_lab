const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(){

}

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:planet-selected-object', (event) =>{
    const planet = event.detail;
    this.render(planet);
  });
}

//before

// PlanetInfoView.prototype.render = function(planet){
//   const infoParagraphUl = document.createElement('ul');
//
//   const nameLi = document.createElement('li');
//   nameLi.textContent = `Planet name: ${planet.name}`;
//   infoParagraphUl.appendChild(nameLi);
//
//   const orbitLi = document.createElement('li');
//   orbitLi.textContent = `Planet orbit: ${planet.orbit}`;
//   infoParagraphUl.appendChild(orbitLi);
//
//   const dayLi = document.createElement('li');
//   dayLi.textContent = `Planet day: ${planet.day}`;
//   infoParagraphUl.appendChild(dayLi);
//
//   const surfaceAreaLi = document.createElement('li');
//   surfaceAreaLi.textContent = `Planet surface: ${planet.surfaceArea}`;
//   infoParagraphUl.appendChild(surfaceAreaLi);
//
//   const volumeLi = document.createElement('li');
//   volumeLi.textContent = `Planet volume: ${planet.volume}`;
//   infoParagraphUl.appendChild(volumeLi);
//
//   const gravityLi = document.createElement('li');
//   gravityLi.textContent = `Planet gravity: ${planet.gravity}`;
//   infoParagraphUl.appendChild(gravityLi);
//
//   const moonsLi = document.createElement('li');
//   moonsLi.textContent = `Planet moons: ${planet.moons}`;
//   infoParagraphUl.appendChild(moonsLi);
//
//   const parentToAppendTo = document.querySelector('.planet-details');
//   parentToAppendTo.appendChild(infoParagraphUl);


//TODO: refactor the code with loop that generate each object

PlanetInfoView.prototype.render = function(planet){
  const list = document.createElement('ol');
  // list.classList.add("list");
  list.id = "list";
  const keys = Object.keys(planet);
  for (let i = 0; i < keys.length-1; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${keys[i]}:  ${planet[keys[i]]}`
    listItem.classList.add("list-item");
    list.appendChild(listItem);
  }
  const image = document.createElement('img');
  image.classList.add("list-image");
  image.src = planet["image"];

  const parentElement = document.querySelector('section.planet-details');
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  parentElement.appendChild(list);
  parentElement.appendChild(image);

}



module.exports = PlanetInfoView;
