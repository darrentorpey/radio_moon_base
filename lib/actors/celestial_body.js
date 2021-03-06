var __cb_count = 0;

function create_celestial_body(options) {
  if (!options) options = {};
  // merge(options, { group: 'boxes' });
  options.group = 'boxes';

  body = {
    id:    'celestial_body_' + __cb_count++,
    group: options.group,
    color: 'rgb(200, 200, 100)',
    sound: options.sound,

    initialize: function() {},
    first:      function() {},
    blit:       function() {
      // gbox.blitRect(gbox.getBufferContext(), {
      //   x:      options.x,
      //   y:      options.y,
      //   w:      100,
      //   h:      100,
      //   color:  this.color,
      //   alpha:  0.3
      // });
    },

    play: function() {
      gbox.playAudio(this.sound);
    },

    stop: function() {
      gbox.stopAudio(this.sound);
    },

    lowerVolume: function() {
      gbox.changeAudioVolume(this.sound, -0.2);
    },

    raiseVolume: function() {
      gbox.changeAudioVolume(this.sound, 0.2);
    },

    getSound: function() {
      gbox.getAudio(this.sound);
    }
  }

  var obj = gbox.addObject(body);

  planets.push(obj);

  return obj;
}
