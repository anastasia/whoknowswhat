var TopBarView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.model.bind("change", this.render);
    return this;
  },

  tagName: 'div',

  events: {
    // "click .home":
    "click a.submit": "triggerSubmit"
  },

  template: _.template(userTemplates.topBarView), // in /client/templates/userTemplates.js

  triggerSubmit: function(e){
    e.preventDefault();
    alert("SUP");
  },

  render: function(eventName){

    this.$el.append(this.template());
    return this;
  }

});