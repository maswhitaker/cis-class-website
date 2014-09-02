Parse.initialize("hZ9lyWpN6XwkEWorocN9l5zKbce11nYOQDuJBFxJ", "eWwOFF8MB6HFgmVwf7aBeUwgTnIYQwUIfP7Fs2bb");

var HomeView = Parse.View.extend({
	template: _.template($("#home").html()),

	initialize: function(){
		this.render();
		$(".container").html(this.el);
	},

	render: function(){
		this.$el.html(this.template(this.model));
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

var Router = Parse.Router.extend({
	routes: {
		"": "home",
		"contact": "contact",
		"assignments": "assignments",
		"writeups": "writeups"
	},
	home: function(){
		new HomeView();
	},
	contact: function(){
		new ContactView();
	},
	assignments: function(){
		new AssignmentsView();
	},
	writeups: function(){
		new WriteupsView();
	}
});

var approuter = new Router();

Parse.history.start();





