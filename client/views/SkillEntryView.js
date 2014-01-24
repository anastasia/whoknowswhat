var SkillEntryView = Backbone.View.extend({
  template: _.template(userTemplates.skillsView), // in /client/templates/userTemplates.js

  tagName: 'thead',

  render: function(eventName){
    var skills = _.keys(this.model.attributes).sort();
    this.$el.html(this.template(skills));
    return this;
  }
});