Parse.initialize("hZ9lyWpN6XwkEWorocN9l5zKbce11nYOQDuJBFxJ", "eWwOFF8MB6HFgmVwf7aBeUwgTnIYQwUIfP7Fs2bb");

var Router = Parse.Router.extend({
  routes: {
    "": "home",
    "contact": "contact",
    "assignments": "assignments",
    "writeups": "writeups",
    "assignments/a1": "a1",
    "writeups/c1": "c1",
    "assignments/a2": "a2",
    "writeups/c2": "c2"
  },
  home: function(){
    if (Parse.User.current()) {
        new HomeView();
        } else {
        new LoginView();
      }
  },
  contact: function(){
    if (Parse.User.current()) {
      new ContactView();
    } else {
      new LoginView();
    }
  },
  assignments: function(){
    if (Parse.User.current()){
      new AssignmentsView();
    } else {
      new LoginView();
    }
  },
  writeups: function(){
    if (Parse.User.current()){
      new WriteupsView();
    } else {
      new LoginView();
    }
  },
  a1: function(){
    if (Parse.User.current()){
      new A1View();
    } else {
      new LoginView();
    }
  },
  c1: function(){
    if (Parse.User.current()){
      new C1View();
    } else {
      new LoginView();
    }
  },
  a2: function(){
    if (Parse.User.current()){
      new A2View();
    } else {
      new LoginView();
    }
  },
  c2: function(){
    if (Parse.User.current()){
      new C2View();
    } else {
      new LoginView();
    }
  }
});

var approuter = new Router();

Parse.history.start();
