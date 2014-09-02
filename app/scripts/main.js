Parse.initialize("hZ9lyWpN6XwkEWorocN9l5zKbce11nYOQDuJBFxJ", "eWwOFF8MB6HFgmVwf7aBeUwgTnIYQwUIfP7Fs2bb");

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

var AssignmentsView = Parse.View.extend({
	template: _.template($("#assignments").html()),

	initialize: function(){
		this.render();
		$(".container").html(this.el);
	},

	render: function(){
		this.$el.html(this.template(this.model));
	}
});

var WriteupsView = Parse.View.extend({
	template: _.template($("#writeups").html()),

	initialize: function(){
		this.render();
		$(".container").html(this.el);
	},

	render: function(){
		this.$el.html(this.template(this.model));
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

var A1View = Parse.View.extend({
	template: _.template($("#a1").html()),
	initialize: function(){
		this.render();
		$(".container").html(this.el);
	},
	render: function(){
		this.$el.html(this.template(this.model));
	}
});

var C1View = Parse.View.extend({
	template: _.template($("#c1").html()),
	initialize: function(){
		this.render();
		$(".container").html(this.el);
	},
	render: function(){
		this.$el.html(this.template(this.model));
	}
});

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

var Router = Parse.Router.extend({
	routes: {
		"": "home",
		"contact": "contact",
		"assignments": "assignments",
		"writeups": "writeups",
		"assignments/a1": "a1",
		"writeups/c1": "c1"
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
	}
});

var approuter = new Router();

Parse.history.start();





