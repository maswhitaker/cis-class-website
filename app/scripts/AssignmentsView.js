Parse.initialize("hZ9lyWpN6XwkEWorocN9l5zKbce11nYOQDuJBFxJ", "eWwOFF8MB6HFgmVwf7aBeUwgTnIYQwUIfP7Fs2bb");

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

var A2View = Parse.View.extend({
  events:{
    "click #animation": "animate",
    "click #submit": "submit"
  },
  animate: function(){
    $("#animation").css("height", "150px");
    $("#animation").css("width", "150px");
  },
  template: _.template($("#a2").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  },
  submit: function(){
    $("#comment-box").append($("#comment").val() + "<br/>");
  }
});
