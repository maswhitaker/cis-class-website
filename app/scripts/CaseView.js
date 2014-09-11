Parse.initialize("hZ9lyWpN6XwkEWorocN9l5zKbce11nYOQDuJBFxJ", "eWwOFF8MB6HFgmVwf7aBeUwgTnIYQwUIfP7Fs2bb");

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

var C2View = Parse.View.extend({
  template: _.template($("#c2").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});
