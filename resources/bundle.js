{
  addImage: [
    ['font',             'resources/font.png'],
    ['logo',             'resources/logo.png'],
    ['player_sprite',    'resources/player_sprite.png'],
    ['map_spritesheet',  'resources/map_pieces.png'],
    ['enemy_sprite',     'resources/enemy_sprite.png'],
    ['player_bullet',    'resources/bullet.png'],
    ['sprites',          'resources/explode.png'],
    ['stars_background', 'resources/background_and_hud.png'],
    ['moon_hold',        'resources/moon_hold.png'],
    ['planet_hold_1',    'resources/planethold1.png']
  ],

  addFont: [
    { id: 'small', image: 'font', firstletter: ' ', tileh: 8, tilew: 8, tilerow: 255, gapx: 0, gapy: 0 }
  ],

  addTiles: [
    {
      id:      'explosion',
      image:   'sprites',
      tileh:   32,
      tilew:   32,
      tilerow: 4,
      gapx:    0,
      gapy:    0
    },
    {
      id:      'player_tiles',
      image:   'player_sprite',
      tileh:   16,
      tilew:   16,
      tilerow: 19,
      gapx:    0,
      gapy:    0
    },
    {
      id:      'map_pieces',
      image:   'map_spritesheet',
      tileh:   16,
      tilew:   16,
      tilerow: 1,
      gapx:    0,
      gapy:    0
    },
    {
      id:      'enemy_tiles',
      image:   'enemy_sprite',
      tileh:   16,
      tilew:   16,
      tilerow: 19,
      gapx:    0,
      gapy:    0
    },
    {
      id:       'player_shot',
      image:    'player_bullet',
      tileh:    4,
      tilew:    4,
      tilerow:  2,
      gapx:     0,
      gapy:     0
    },
    {
      id:      'moon_hold',
      image:   'moon_hold',
      tileh:   100,
      tilew:   100,
      tilerow: 4,
      gapx:    0,
      gapy:    0
    },
    {
      id:      'planet_hold_one',
      image:   'planet_hold_1',
      tilew:   170, tileh:   170,
      tilerow: 4,
      gapx:    0,
      gapy:    0
    },
    {
      id:      'stars_background',
      image:   'stars_background',
      tilew:   1024,
      tileh:   768,
      tilerow: 1,
      gapx:    0,
      gapy:    0
    },
    {
      id:      'stars_t',
      image:   'stars',
      tilew:   147,
      tileh:   112,
      tilerow: 1,
      gapx:    0,
      gapy:    0
    }
  ],

  addAudio: [
    ['explosion',               ['resources/test-tone.ogg'],          { channel: 'bgmusic', loop: false }],
    ['moon_music_1',            ['resources/music/synth_line.ogg'],   { channel: 'bgmusic', loop: true }],
    ['moon_music_drum_1',       ['resources/music/Drums.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_percussion_1', ['resources/music/Percussion_1.ogg'], { channel: 'bgmusic', loop: true }],
    ['moon_music_percussion_1b', ['resources/music/Percussion_1.ogg'], { channel: 'bgmusic', loop: true }],
    ['moon_music_percussion_1c', ['resources/music/Percussion_1.ogg'], { channel: 'bgmusic', loop: true }],
    ['moon_music_percussion_2', ['resources/music/Percussion_2.ogg'], { channel: 'bgmusic', loop: true }],
    ['moon_music_synth_1',      ['resources/music/Synth.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_pad_1',        ['resources/music/Pad_1.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_pad_2',        ['resources/music/Pad_2.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_pad_3',        ['resources/music/Pad_3.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_bells_1',      ['resources/music/Bells_1.ogg'],      { channel: 'bgmusic', loop: true }],
    ['moon_music_bells_2',      ['resources/music/Bells_2.ogg'],      { channel: 'bgmusic', loop: true }]
  ]
}