var HeaderTextView = Backbone.View.extend({

  initialize: function(){
    this.$el.attr("id", "hero" );
    this.$el.attr("class", "twelve columns text-center");
  },

  template: _.template(userTemplates.headerText),

  render: function(eventName){
    this.$el.html(this.template());
    return this;
  },

  destroy: function(){
    this.$el.remove();
  }

});