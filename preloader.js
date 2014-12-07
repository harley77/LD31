"use strict";
LD.Preloader = function(game){};
LD.Preloader.prototype = {

    preload: function () {


      this.stage.backgroundColor = '#DDDDDD';
      // Load sprites
      this.load.image('titlescreen', 'assets/title_screen.png');
      this.load.image('gameoverscreen', 'assets/game_over.png');
      this.load.image('tiles', 'assets/room_tiles.png');
      this.load.image('floor', 'assets/carpet_tile.png');
      this.load.image('ceiling', 'assets/ceiling_tile.png');
      this.load.image('fan_light', 'assets/fan_light.png');
      this.load.image('baseball', 'assets/baseball.png');
      this.load.image('watergun', 'assets/water_gun.png');
      this.load.image('tv', 'assets/tv.png');

      // Sprite Sheets
      this.load.spritesheet('fan_top', 'assets/fan_top.png', 192, 102);
      this.load.spritesheet('bug_ani', 'assets/little_bug_ani.png', 24, 24);
      this.load.spritesheet('cat', 'assets/cat_ani.png', 64, 48);
      this.load.spritesheet('brian_ani', 'assets/little_brian_ani.png', 55, 100);

      // Tile Map
      this.load.tilemap('room', 'assets/room_tiled.json', null, Phaser.Tilemap.TILED_JSON);
    },

    create: function () {
      console.log("preloader create");
      this.state.start('Menu');
    }

};