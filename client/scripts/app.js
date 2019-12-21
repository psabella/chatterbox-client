var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    // var messages;
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        var message = data.results[i];
        MessagesView.renderMessage(message);
      }
      // messages = data;

    });
    // return messages;
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
