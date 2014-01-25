var AddSkillView = Backbone.View.extend({

  initialize: function(){
    this.$el.attr( "class", "skill" );
  },


  template: _.template(userTemplates.addSkillView),

  render: function(eventName){
    this.$el.html(this.template(this.model));
    return this;
  }
});