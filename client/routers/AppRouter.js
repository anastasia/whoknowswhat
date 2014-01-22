var AppRouter = Backbone.Router.extend({

  routes: {
    "": "showSkills",
    "skills": "showSkills",
    "create": "create"
  },

  showSkills: function(){
    this.users = new UserCollection();
    this.users.fetch({
      success: function(model, response, options){
        // console.log(this.users.models);
        this.userListView = new UsersListView({
          collection: this.users
        });
        $('body').html(this.userListView.render().el);
      }.bind(this),
      error: function(err){
        console.log(err);
      }
    });
    // debugger;
  },

  create: function(){
    this.createUserView = new CreateUserView({
      model: User
    });
    $('body').html(this.createUserView.render().el);
  },

  initialize: function(options){
    return this;
  }
});

var appRouter = new AppRouter();