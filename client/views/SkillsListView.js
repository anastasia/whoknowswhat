var SkillsListView = Backbone.View.extend({
  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
    this.collection.on('add', function(user){
      this.collection.fetch({
        success: function(model, response, options){
          this.render();
          $('table').empty();
          $('table').append(appRouter.skillsListView.render().el);
          $('thead').after(appRouter.usersListView.render().el);
          // this.collection.update();
        }.bind(this)
      });
    }, this);
  },

  template: _.template(userTemplates.skillsView), // in /client/templates/userTemplates.js

  tagName: 'table',

  render: function(eventName){
    // _.each(this.collection.getSkills, function(skill){
      // debugger;
      var skills = _.keys(this.collection.getSkills()).sort();
      // console.log(skills);
      this.$el.append(this.template(skills));
      // this.$el.append(skillEntryView.render().el);
    // }, this);
    return this;
  }

  // render: function(eventName){
  //   _.each(this.collection.models, function(skill){
  //     var skillEntryView = new SkillEntryView({model: skill});
  //     this.$el.append(skillEntryView.render().el);
  //   }, this);
  //   return this;
  // }

});