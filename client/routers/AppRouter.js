var AppRouter = Backbone.Router.extend({
  routes: {
    "/skills": "showSkills"
  },
  showSkills: function(){
    this.users = new UserCollection();
    this.userListView = new UserListView({
      collection: this.users
    });
    $('body').html(this.userListView.render().el);
  }

});

var app = newAppRouter();
Backbone.history.start();