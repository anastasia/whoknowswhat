var UserEntryView = Backbone.View.extend({
  template: _.template(userTemplates.usersView), // in /client/templates/userTemplates.js

  tagName: 'tr',

  render: function(eventName){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});