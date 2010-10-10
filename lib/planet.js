var planetFactory = {
	mainPlanetNumber : 0,
	
	_initId : function (parentId) {
		var id;
		if (parentId == 'null')
			{
				id = 'planet-' + this.mainPlanetNumber++;
			}
			else
			{
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
	
	_initController : function(parentId,controllerName) {
		if (parentId != 'null')
		{
			var parent = gbox.getObject('planets',parentId);
			switch(controllerName)
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
			switch(controllerName)
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
	
	createPlanet : function(parentId, radius, speed,controllerName) {
		var planet = {
			id : this._initId(parentId),
			group : 'planets',
			tileset : 'player_tiles',
			parentPlanet : this._initParent(parentId),
			children : [],
			radius : radius,
			speed : speed,
			controller : this._initController(parentId,controllerName),
			x : this._initX(parentId,radius),
			y : this._initY(parentId,radius),
			
			initialize: function() {
				toys.topview.initialize(this, {});
				if (this.parentPlanet != 'null')
				{
					this.parentPlanet.children.push(this);
				}
			},
			
			first: function() {			
				if (this.parentPlanet != 'null')
				{
					var thisPoint = {
						x : this.x,
						y : this.y
					};
					
					var parentPoint = {
						x : this.parentPlanet.x,
						y : this.parentPlanet.y
					};
					
					var finalAngle = trigo.addAngle((this.speed / this.radius), trigo.getAngle(thisPoint, parentPoint));
					this.x = (-Math.cos(finalAngle) * this.radius) + parentPoint.x;
					this.y = (-Math.sin(finalAngle) * this.radius) + parentPoint.y;
				}
				
				//Execute the controller
				this.controller());
			},
			blit: function() {
				gbox.blitTile(gbox.getBufferContext(), {
				tileset: this.tileset,
				tile:    this.frame,
				dx:      this.x,
				dy:      this.y,
				fliph:   this.fliph,
				flipv:   this.flipv,
				camera:  this.camera,
				alpha:   1.0
				});
			}
		};
		if (planet.parentPlanet != 'null')
		{
			planet.parentPlanet.children.push(planet);
		}
		gbox.addObject(planet);
	}
}