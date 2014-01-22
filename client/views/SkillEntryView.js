var SkillEntryView = Backbone.View.extend({
  template: _.template(userTemplates.skillsView), // in /client/templates/userTemplates.js
  render: function(eventName){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});