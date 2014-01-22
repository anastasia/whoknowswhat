var AppRouter = Backbone.Router.extend({

  routes: {
    "": "showSkills",
    "skills": "showSkills"
  },

  showSkills: function(){
    this.users = new UserCollection();
    this.userListView = new UsersListView({
      collection: this.users
    });
    $('body').html(this.userListView.render().el);
  },

  initialize: function(options){
    return this;
  }
});

var appRouter = new AppRouter();