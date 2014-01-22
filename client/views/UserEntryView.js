var UserEntryView = Backbone.View.extend({
  template: _.template(
    "<%= name %>This is a user."
  ),
  render: function(eventName){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});