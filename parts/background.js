function addBackground() {
  gbox.addObject({
    id:       'stars_bckgnd',
    group:    'background',
    tileset:  'stars_background',

    first: function() {
      toys.topview.initialize(this, {});

      if (gbox.keyIsHit('left')) {
        planetFactory.getPrevPlanet();
      } else if (gbox.keyIsHit('right')) {
        planetFactory.getNextPlanet();
      } else if (gbox.keyIsHit('down')) {
        volumeDownCurrent();
      } else if (gbox.keyIsHit('up')) {
        volumeUpCurrent();
      }

      if (gbox.keyIsHit('a')) {
        g_currentPlanet
      } else if (gbox.keyIsHit('b')) {
        maingame.playerDied({ wait: 100 });
      } else if (gbox.keyIsHit('c')) {
        findNearestWorkplace(this).tip();
        this.done_doing_work();
      }
    },

    blit: function() {
      gbox.blitFade(gbox.getBufferContext(), { alpha: 1 });

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

function volumeUpCurrent() {
  if (g_currentPlanet) {
    g_currentPlanet.raiseVolume();
  }
}

function volumeDownCurrent() {
  if (g_currentPlanet) {
    g_currentPlanet.lowerVolume();
  }
}