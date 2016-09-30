// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Queue</th>').append(this.collection.map(function(songQueueEntry) {
      var songQueueEntryView = new SongQueueEntryView({model: songQueueEntry});
      return songQueueEntryView.render();
    }));
  }

});
