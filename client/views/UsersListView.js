var UsersListView = Backbone.View.extend({
  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
  },

  render: function(eventName){
    _.each(this.collection.models, function(user){
      var userEntryView = new UserEntryView({model: user});
      this.$el.append(userEntryView.render().el);
    }, this);
    return this;
  }

});