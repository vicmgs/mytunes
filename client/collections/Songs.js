// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function (data) {
        var importedSongData = data.results.map(function(obj) {
          return {
            url: obj.url,
            title: obj.title,
            artist: obj.artist,
            playcount: 0
          };
        });

        this.reset(importedSongData);
      }.bind(this)
    });
  }
});