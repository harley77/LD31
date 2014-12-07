"use strict";
LD.Game = function(game){
  this.deathType = null;
};


LD.Game.prototype = {

    create: function () {
      // console.log(this);
      this.level = new LD.Level(this);
      this.bug = new LD.Bug(this);
      this.player = new LD.Player(this, 30, 120);
      this.actor = new LD.Actor(this, 30, 120);
      this.items = new LD.Items(this);

      this.level.create();
      this.bug.create();
      this.actor.create();
      this.items.create();
      this.player.create();

    },

    update: function () {
      this.level.update();
      this.actor.update();
      this.player.update();
      this.bug.update();
      this.items.update();

    }

};
