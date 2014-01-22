var UserEntryView = Backbone.View.extend({
  template: _.template($('.tpl-user-item').html()),
  render: function(eventName){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});