var RoomsView = {

  $button: $('#rooms .addRoom .button'),
  $select: $('#rooms select'),
  $roomInput: $('#rooms .addRoom .roomInput'),

  initialize: function() {
    this.$button.on('click', () => {
      var newRoom = this.$roomInput.val();
      if (newRoom) {
        this.renderRoom(newRoom);
      }
      this.$roomInput.val('');
    });

    Parse.readAll((data) => {
      // examine the response from the server request:
      var rooms = [];
      for (var i = 0; i < data.results.length; i++) {
        var roomName = data.results[i].roomname;
        if (roomName) {
          if (rooms.indexOf(roomName) === -1) {
            rooms.push(roomName);
          }
        }
      }

      for (var j = 0; j < rooms.length; j++) {
        this.renderRoom(rooms[j]);
      }

    });
  },

  renderRoom: function(roomName) {

    this.$select.append(`<option value="${roomName}">${roomName}</option>`);
  }

};
