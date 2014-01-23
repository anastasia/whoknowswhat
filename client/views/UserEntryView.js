var UserEntryView = Backbone.View.extend({
  template: _.template(userTemplates.usersView), // in /client/templates/userTemplates.js

  tagName: 'tr',

  render: function(eventName){

    var skillCount = {};
    _.each(this.collection.models, function(user, key, collection){
      _.each(user.attributes.skills, function(skill){
        if (!skillCount[skill]) {
          skillCount[skill] = 1;
        } else {
          skillCount[skill] += 1;
        }
      });
    });

    var skills = _.keys(skillCount).sort();

    console.log(skills);

    var templateObj = {
      model: this.model.toJSON(),
      skills: skills
    };
    this.$el.html(this.template(templateObj));

    // this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});