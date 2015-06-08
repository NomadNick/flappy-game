var graphicsComponent = require('../components/graphics/bird');

var Bird = function() {
  console.log('Creating Bird entity');
  var graphics = new graphicsComponent.BirdGraphicsComponent(this);
  //object that will hold all components for the bird
  this.components = {
    graphics: graphics
  };
};

exports.Bird = Bird;
