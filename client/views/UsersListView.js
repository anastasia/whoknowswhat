var UsersListView = Backbone.View.extend({
  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.on('add', function(user){
      this.collection.fetch({
        success: function(model, response, options){
          
          this.render();
        }.bind(this)
      });
    }, this);
    this.collection.fetch();
  },

  tagName: 'tbody',

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

    _.each(this.collection.models, function(user, index, collection){
      var userEntryView = new UserEntryView({
        model: user,
        collection: this.collection
      });
      this.$el.append(userEntryView.render().el);
    }, this);
    return this;
  },

  addUser: function(model, collection, options){
    this.render();
  }

});