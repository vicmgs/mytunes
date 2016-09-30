// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('remove', function() { 
      // if (this.length > 0) {
      //   this.playFirst();
      // }
    });

    this.on('ended', function(song) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
    
    this.on('dequeue', function(song) {
      if (song === this.at(0)) {
        this.shift();
        if (this.length > 0) {
          this.playFirst();
        } else {
          this.trigger('stop');
        }
      } else {
        this.remove(song);
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }
});