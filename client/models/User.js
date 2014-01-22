var User = Backbone.Model.extend({

  defaults: {
    name: "Doug's Beard",
    email: "doug@hackreactor.com",
    skills: []
  },

  url: "/api/users",

  initialize: function(params){
    // this.set()

  }
});