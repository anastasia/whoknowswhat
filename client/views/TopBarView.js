var TopBarView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.model.bind("change", this.render);
    return this;
  },

  tagName: 'div',

  events: {
    // "click .home":
    "click a.home": "triggerHome",
    "click a.submit": "triggerSubmit",
    "click a.edit": "triggerEdit"
  },

  template: _.template(userTemplates.topBarView), // in /client/templates/userTemplates.js

  triggerSubmit: function(e){
    e.preventDefault();
    appRouter.navigate("submit", {trigger: true});
  },

  triggerEdit: function(e){
    e.preventDefault();
    appRouter.navigate("edit", {trigger: true});
  },

  triggerHome: function(e){
    e.preventDefault();
    appRouter.navigate("/", {trigger: true});
  },

  render: function(eventName){
    this.$el.append(this.template());
    return this;
  },

  destroy: function(){
    this.$el.remove();
  }

});