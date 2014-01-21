var AppView = Backbone.View.extend({
  initialize: function(params){
    this.render();
  },

  render: function(){
    return this.$el.html("Hello world!");
  }
});