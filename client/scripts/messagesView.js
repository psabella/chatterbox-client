var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    Parse.create(message);

    
  }

};