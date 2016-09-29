// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    return this.$el.html(this.collection.map(function(songQueueEntry) {
      var songQueueEntryView = new SongQueueEntryView({model: songQueueEntry});
      return songQueueEntryView.render();
    }));
  }

});
