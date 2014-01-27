var UsersListView = Backbone.View.extend({
  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();

    this.collection.on('add', function(user){
      this.collection.fetch({
        success: function(model, response, options){
          this.render();
          // appRouter.skillsListView = new SkillsListView({collection: this.skills});
          $('table').empty();
          $('table').append(appRouter.skillsListView.render().el);
          $('thead').after(appRouter.usersListView.render().el);
        }.bind(this)
      });
    }, this);

  },

  tagName: 'tbody',

  render: function(eventName){
    var skillCount = {};
    _.each(this.collection.models, function(user, key, collection){
      _.each(user.attributes.skills, function(skillValue, skill){
        if (!skillCount[skill]) {
          skillCount[skill] = 1;
        } else {
          skillCount[skill] += 1;
        }
      });
    });

    var skills = _.keys(skillCount).sort();
    this.$el.empty();                             // clear tbody element

    _.each(this.collection.models, function(user, index, collection){
      var userEntryView = new UserEntryView({
        model: user,
        collection: this.collection
      });
      this.$el.append(userEntryView.render().el); // append entry views to tbody
    }, this);
    return this;
  },

  addUser: function(model, collection, options){
    this.render();
  },

  destroy: function(){
    this.$el.remove();
  }

});