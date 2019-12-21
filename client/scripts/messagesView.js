var MessagesView = {

  $chats: $('#chats'),
  $newMessage: $('#message'),
  $submit: $('.submit'),
  $currentRoom: $('select'),

  initialize: function() {
    this.$submit.on('click', () => {
      var message = {username: App.username, text: this.$newMessage.val(), roomname: this.$currentRoom.val()};
      this.renderMessage(message);
      this.$newMessage.val('');
      Parse.create(message, () => { alert('message sent'); });
    });

    $('#chats').on('click', '.username', (event) => {
      var user = $(event.target).text();
      if ($('div:contains("' + user + '")').hasClass('friend')) {
        $('div:contains("' + user + '")').removeClass('friend');
      } else {
        $('div:contains("' + user + '")').addClass('friend');
      }
    });
  },

  renderMessage: function(message) {
    if (message.username && message.roomname && message.text) {
      var message = MessageView.render(message);
      $('#chats').prepend(message);
    }
  }
};