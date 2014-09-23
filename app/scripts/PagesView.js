Parse.initialize("hZ9lyWpN6XwkEWorocN9l5zKbce11nYOQDuJBFxJ", "eWwOFF8MB6HFgmVwf7aBeUwgTnIYQwUIfP7Fs2bb");

var LoginView = Parse.View.extend({
  events:{
      "submit form.login-form": "logIn",
      "submit form.signup-form": "signUp"
  },

  template: _.template($("#login-template").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  },
  signUp: function(e) {
      var self = this;
      var username = this.$("#signup-username").val();
      var password = this.$("#signup-password").val();

      Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
        success: function(user) {
          new HomeView();
          delete self;
        },

        error: function(user, error) {
          self.$(".signup-form .error").html(error.message).show();
        }
      });

      return false;
    },
    logIn: function(e) {
      var self = this;
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();

      Parse.User.logIn(username, password, {
        success: function(user) {
          new HomeView();
          delete self;
        },

        error: function(user, error) {
          self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
        }
      });

      return false;
    }
});

var HomeView = Parse.View.extend({
  events:{
    "click .log-out": "logOut"
  },

  template: _.template($("#home").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },

  render: function(){
    this.$el.html(this.template(this.model));
  },
  logOut: function(e) {
      Parse.User.logOut();
      new LoginView();
    }
});


var ContactView = Parse.View.extend({
  template: _.template($("#contact").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },

  render: function(){
    this.$el.html(this.template(this.model));
  }
});
