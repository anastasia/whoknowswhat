var SkillsListView = Backbone.View.extend({
  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
  },

  render: function(eventName){
    _.each(this.collection.models, function(skill){
      var skillEntryView = new SkillEntryView({model: skill});
      this.$el.append(skillEntryView.render().el);
    }, this);
    return this;
  }

});