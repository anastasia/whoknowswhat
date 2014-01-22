var AppRouter = Backbone.Router.extend({

  routes: {
    "": "showSkills",
    "skills": "showSkills",
    "create": "create"
  },

  showSkills: function(){
    // this.skills = new 
    this.users = new UserCollection();
    this.skills = new Skills();
    this.skills.fetch({
      success: function(model, response, options){
        this.skillsListView = new SkillsListView({
          collection: this.skills
        });
        $('body').append(this.skillsListView.render().el);
      }.bind(this),
      error: function(err){
        console.log(err);
      }
    });
    this.users.fetch({
      success: function(model, response, options){
        this.usersListView = new UsersListView({
          collection: this.users
        });
        $('body').append(this.usersListView.render().el);
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