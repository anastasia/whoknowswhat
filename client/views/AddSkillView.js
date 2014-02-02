var AddSkillView = Backbone.View.extend({

  initialize: function(){
    this.$el.attr( "class", "skill" );
    this.$el.attr("class", "twelve columns text-center");
  },

  template: _.template(userTemplates.addSkillView),

  render: function(eventName){
    this.$el.html(this.template(this.model));
    return this;
  },

  destroy: function(){
    this.$el.remove();
  }
  
});