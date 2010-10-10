var __cb_count = 0;
var ancest;
CelestialBody = $.klass(BasicBox, {
  initialize: function() {
    // if ($super) $super.apply(this, args);
    // ancest = this.superclass && this.superclass.prototype;
    // console.log(ancest);
    // $super();
    debugger
  }
});

function create_celestial_body(options) {
  if (!options) options = {};
  // merge(options, { group: 'boxes' });
  options.group = 'boxes';

  // new BasicBox({ x: options.x, y: options.y, height: 100, width: 100, color: 'rgb(100, 200, 200)' });
// new BasicBox({ x: options.x, y: 40, height: 100, width: 100, color: 'rgb(100, 200, 200)' });
  var obj = gbox.addObject({
    id:    'celestial_body_' + __cb_count++,
    group: options.group,
    color: 'rgb(200, 200, 0)',
    sound: options.sound,

    initialize: function() {},
    first:      function() {},
    blit:       function() {
      gbox.blitRect(gbox.getBufferContext(), {
        x:      options.x,
        y:      options.y,
        w:      100,
        h:      100,
        color:  this.color,
        alpha: 0.8
      });
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
    }
  });

  return obj;
}