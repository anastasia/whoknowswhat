var SkillsListView = Backbone.View.extend({

  initialize: function(){
    this.$el.attr( "id", "skillsListView" );

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
    var skills = _.keys(this.collection.getSkills()).sort();
    this.$el.append(this.template(skills));
    return this;
  }

});