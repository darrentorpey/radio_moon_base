function addMoon() {
  gbox.addObject({
    id:       'the_moon',
    group:    'player',
    tileset:  'planet_hold_one',

    initialize: function() {      
      toys.topview.initialize(this, {});

      this.x = 120;
      this.y = 120;
    },

    first: function() {
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
  });
}