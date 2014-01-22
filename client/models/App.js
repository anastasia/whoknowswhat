var App = Backbone.Model.extend({
  initialize: function(params){
    Backbone.history.start({pushState: true});
    appRouter.navigate('/', {trigger: true});
  }

});

var app = new App();
  