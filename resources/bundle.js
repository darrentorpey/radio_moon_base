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
    ['planet_1',         'resources/planets/planet1.png'],
    ['planet_1_glow',    'resources/planets/planet1_select.png'],
    ['planet_2',         'resources/planets/planet2.png'],
    ['planet_2_glow',    'resources/planets/planet2_select.png'],
    ['planet_3',         'resources/planets/planet3.png'],
    ['planet_3_glow',    'resources/planets/planet3_select.png'],
    ['planet_4',         'resources/planets/planet4.png'],
    ['planet_4_glow',    'resources/planets/planet4_select.png'],
    ['planet_5',         'resources/planets/planet5.png'],
    ['planet_5_glow',    'resources/planets/planet5_select.png'],
    ['planet_6',         'resources/planets/planet6.png'],
    ['planet_6_glow',    'resources/planets/planet6_select.png'],
    ['planet_7',         'resources/planets/planet7.png'],
    ['planet_7_glow',    'resources/planets/planet7_select.png'],
    ['planet_8',         'resources/planets/planet8.png'],
    ['planet_8_glow',    'resources/planets/planet8_select.png'],
    ['moon_1',           'resources/moons/moon1.png'],
    ['moon_2',           'resources/moons/moon2.png'],
    ['moon_3',           'resources/moons/moon3.png'],
    ['moon_4',           'resources/moons/moon4.png'],
    ['moon_5',           'resources/moons/moon5.png'],
    ['title_screen',     'resources/title.png']
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
      id: 'planet_1', image: 'planet_1',
      tilew: 160, tileh: 160,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_1_glow', image: 'planet_1_glow',
      tilew: 160, tileh: 160,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_2', image: 'planet_2',
      tilew: 140, tileh: 140,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_2_glow', image: 'planet_2_glow',
      tilew: 140, tileh: 140,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_3', image: 'planet_3',
      tilew: 150, tileh: 150,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_3_glow', image: 'planet_3_glow',
      tilew: 150, tileh: 150,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_4', image: 'planet_4',
      tilew: 150, tileh: 150,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_4_glow', image: 'planet_4_glow',
      tilew: 150, tileh: 150,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_5', image: 'planet_5',
      tilew: 150, tileh: 150,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_5_glow', image: 'planet_5_glow',
      tilew: 150, tileh: 150,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_6', image: 'planet_6',
      tilew: 140, tileh: 140,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_6_glow', image: 'planet_6_glow',
      tilew: 140, tileh: 140,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_7', image: 'planet_7',
      tilew: 140, tileh: 140,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_7_glow', image: 'planet_7_glow',
      tilew: 140, tileh: 140,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_8_glow', image: 'planet_8_glow',
      tilew: 160, tileh: 160,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'planet_8_glow', image: 'planet_8_glow',
      tilew: 160, tileh: 160,
      tilerow: 1, gapx: 0, gapy: 0
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
    },
    {
      id: 'moon_1', image: 'moon_1',
      tilew: 30, tileh: 30,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'moon_2', image: 'moon_2',
      tilew: 30, tileh: 30,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'moon_3', image: 'moon_3',
      tilew: 30, tileh: 30,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'moon_4', image: 'moon_4',
      tilew: 30, tileh: 30,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'moon_5', image: 'moon_5',
      tilew: 30, tileh: 30,
      tilerow: 1, gapx: 0, gapy: 0
    },
    {
      id: 'title_screen', image: 'title_screen',
      tilew: 1024, tileh: 768,
      tilerow: 1, gapx: 0, gapy: 0
    }
  ],

  addAudio: [
    ['explosion',               ['resources/test-tone.ogg'],          { channel: 'bgmusic', loop: false }],
    ['moon_music_1',            ['resources/music/synth_line.ogg'],   { channel: 'bgmusic', loop: true }],
    ['moon_music_drum_1',       ['resources/music/Drums.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_percussion_1', ['resources/music/Percussion_1.ogg'], { channel: 'bgmusic', loop: true }],
    ['moon_music_percussion_2', ['resources/music/Percussion_2.ogg'], { channel: 'bgmusic', loop: true }],
    ['moon_music_synth_1',      ['resources/music/Synth.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_pad_1',        ['resources/music/Pad_1.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_pad_2',        ['resources/music/Pad_2.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_pad_3',        ['resources/music/Pad_3.ogg'],        { channel: 'bgmusic', loop: true }],
    ['moon_music_bells_1',      ['resources/music/Bells_1.ogg'],      { channel: 'bgmusic', loop: true }],
    ['echoes',            ['resources/loops/loop_echoes.ogg'],      { channel: 'bgmusic', loop: true }],
    ['starrysounds',            ['resources/loops/loop_starrysounds.ogg'],      { channel: 'bgmusic', loop: true }],
    ['moon_music_bells_2',      ['resources/music/Bells_2.ogg'],      { channel: 'bgmusic', loop: true }]
  ]
}