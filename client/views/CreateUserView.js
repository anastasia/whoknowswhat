var CreateUserView = Backbone.View.extend({
  template: _.template(
    "<p>Create your profile here</p>"
  ),
  render: function(eventName){
    this.$el.html(this.template());
    return this;
  }
});