var celestial_bodies = [];
var planets = [];
var g_currentPlanet;
var g_max_moon_speed = 6;

var planetFactory = {
	mainPlanetNumber : 0,

  getPrevPlanet: function() {
    var next_pos;
    if (g_currentPlanet) {
      next_pos = planets.indexOf(g_currentPlanet) - 1;
    } else {
      next_pos = 0;
    }

    if (next_pos < 0) {
      next_pos = planets.length - 1;
    }

    if (next_pos >= planets.length) {
      next_pos = 0;
    }

    planets[next_pos].select();
  },

  getNextPlanet: function() {
    var next_pos;
    if (g_currentPlanet) {
      next_pos = planets.indexOf(g_currentPlanet) + 1;
    } else {
      next_pos = 0;
    }

    if (next_pos >= planets.length) {
      next_pos = 0;
    }

    planets[next_pos].select();
  },

	_initId : function (parentId) {
		var id;

		if (parentId == 'null'){
			id = 'planet-' + this.mainPlanetNumber++;
		} else {
			var parent = gbox.getObject('planets',parentId);
			id = parent.id + '-planet-' + parent.children.length;
		}

		return id;
	},
		
	_initParent : function (parentId) {
		if (parentId != 'null')
		{
			return gbox.getObject('planets',parentId);
		}
		else
		{
			return 'null';
		}
	},
	
	_initX : function(parentId, initRadius) {
		if (parentId == 'null')
		{
			return 300 * this.mainPlanetNumber;
		}
		else
		{
			var parent = gbox.getObject('planets',parentId);
			return parent.x + initRadius;
		}
	},
	
	_initY : function(parentId, initRadius) {
		if (parentId == 'null')
		{
			return 200 * this.mainPlanetNumber;
		}
		else
		{
			var parent = gbox.getObject('planets',parentId);
			return parent.y + initRadius;
		}
	},
	
	_initController : function(parentId,effect) {
		if (parentId != 'null')
		{
			var parent = gbox.getObject('planets',parentId);
			switch(effect)
			{
				case 'fullVolume':
					return function() {
						//set full volume based on position blah ...
						return "Full Volume";//return blah
					};
				case 'lowerHalfVolume':
				return function() {
						return "Lower Half Volume + " + parent.controller();
					};
				case 'upperHalfVolume':
				return function() {
						return;
					};
				case 'rightMiddlePan':
				return function() {
						return;
					};
				case 'leftMiddlePan':
				return function() {
						return;
					};
				case 'fullPan':
				return function() {
						return;
					};
			}
		}
		else
		{
			switch(effect)
			{
				case 'playTrack':
				return function() {
					//Play the audio.
					return "playTrack";
					};
				default:
					return function() {
						return "default";
					};
			
			}
		}
	},

  _pickMoonTileset: function() {
    var rand = Math.floor(Math.random() * 5) + 1;
    return 'moon_' + rand;
  },

  _pickPlanetTileset: function() {
    return 'planet_' + (planets.length + 1);
  },

	createPlanet : function(options) {
	  var parentId       = options.parentId;
	  var radius         = options.radius;
	  var speed          = options.speed;
	  var effect         = options.effect;
	  var sound          = options.sound;

		var planet = {
			id : this._initId(parentId),
			group : 'planets',
			tileset : (parentId == 'null') ? this._pickPlanetTileset() : this._pickMoonTileset(),
			parentPlanet : this._initParent(parentId),
			children : [],
			radius : radius,
			speed : speed,
			sound: sound,
			selected: false,
			controller : this._initController(parentId, effect),
			x : options.x ? options.x : this._initX(parentId, radius),
			y : options.y ? options.y : this._initY(parentId, radius),
			
			initialize: function() {
				toys.topview.initialize(this, {});

				if (this.parentPlanet != 'null') {
					this.parentPlanet.children.push(this);
				}

        this.updateMoonSpeed();
			},
			
			first: function() {			
				if (this.parentPlanet != 'null') {
					var thisPoint = {
						x : this.x,
						y : this.y
					};
					
					var parentPoint = {
						x : this.parentPlanet.x + this.parentPlanet.hw,
						y : this.parentPlanet.y + this.parentPlanet.hh
					};
					
					var finalAngle = trigo.addAngle((this.speed / this.radius), trigo.getAngle(thisPoint, parentPoint));
					this.x = (-Math.cos(finalAngle) * this.radius) + parentPoint.x;
					this.y = (-Math.sin(finalAngle) * this.radius) + parentPoint.y;
				}
				
				//Execute the controller
				this.controller();
			},

			blit: function() {
				gbox.blitTile(gbox.getBufferContext(), {
				tileset: this.getTileset(),
				tile:    this.frame,
				dx:      this.x,
				dy:      this.y,
				fliph:   this.fliph,
				flipv:   this.flipv,
				camera:  this.camera,
				alpha:   1.0
				});
			},

      getTileset: function() {
        if (this.selected) {
          return this.tileset + '_glow';
        } else {          
          return this.tileset;
        }
      },

      play: function() {
        gbox.playAudio(this.sound);
      },

      stop: function() {
        gbox.stopAudio(this.sound);
      },

      getVolume: function() {
        return gbox.getAudioVolume(this.sound);
      },

      lowerVolume: function() {
        if (this.getVolume() > 0.01) {
          gbox.changeAudioVolume(this.sound, -0.2);
        }
        this.updateMoonSpeed();
      },

      raiseVolume: function() {
        gbox.changeAudioVolume(this.sound, 0.2);
        this.updateMoonSpeed();
      },

      getSound: function() {
        return gbox.getAudio(this.sound);
      },

      select: function() {
        if (g_currentPlanet) {
          g_currentPlanet.unselect();
        }
        g_currentPlanet = this;
        this.selected = true;
      },

      unselect: function() {
        this.selected = false;
      },

      isPlanet: function() {
        return this.parentPlanet == 'null';
      },

      getMoons: function() {
        if (this.isPlanet()) {
          return this.children;
        }
      },

      updateMoonSpeed: function() {
        if (this.isPlanet()) {
          this.changeMoonSpeed(this.getVolume());
        }
      },

      changeMoonSpeed: function(speedFactor) {
        for (m in (moons = this.getMoons())) {
          moons[m].speed = speedFactor * g_max_moon_speed;
        }
      }
		}

		if (!planet.isPlanet()) {
			planet.parentPlanet.children.push(planet);
		}

		var planet_object = gbox.addObject(planet);

		if (parentId == 'null') {
		  planets.push(planet_object);
	  }
		celestial_bodies.push(planet_object);
	}
}

function playAll() {
  for (p in planets)
    planets[p].play();
}

function stopAll() {
  for (p in planets)
    planets[p].stop();
}