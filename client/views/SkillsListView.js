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

  tagName: 'table',

  render: function(eventName){
    _.each(this.collection.models, function(skill){
      var skillEntryView = new SkillEntryView({model: skill});
      this.$el.append(skillEntryView.render().el);
    }, this);
    return this;
  }

});