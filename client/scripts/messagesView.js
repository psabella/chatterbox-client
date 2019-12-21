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
    // Messages.print();
    // FormView.$form.on('click', FormView.handleSubmit);
    // $('.username').on('click', () => {
    //   Friends.toggleStatus();

    // });
  },

  renderMessage: function(message) {
    if (message.username && message.roomname) {
      var message = MessageView.render(message);
      $('#chats').prepend(message);
    }

    // var messages = $('#chats').children();
    // messages = [...messages];
    // messages.push(message);
    // if (!$('#chats').children()) {
    //   // $('#chats').children = [];
    // }
    // $('#chats').childNodes.push(message);

    // console.log($('#chats').children());
  }

};