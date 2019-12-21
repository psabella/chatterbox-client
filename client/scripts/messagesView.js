var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // FormView.$form.on('click', FormView.handleSubmit);
    
  },

  renderMessage: function(message) {

    var message = MessageView.render(message);
    // var messages = $('#chats').children();
    // messages = [...messages];
    // messages.push(message);
    // if (!$('#chats').children()) {
    //   // $('#chats').children = [];
    // }
    // $('#chats').childNodes.push(message);
    $('#chats').append(message);
    // console.log($('#chats').children());
  }

};