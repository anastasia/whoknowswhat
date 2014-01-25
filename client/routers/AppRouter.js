var AppRouter = Backbone.Router.extend({

  routes: {
    "": "showSkills",
    "skills": "showSkills",
    "submit": "submit"
  },

  showSkills: function(){
    // this.skills = new 
    this.users = new UserCollection();

    // this.skills = new Skills();

    // render Create User Form
    this.createUserView = new CreateUserView({
      model: new User(),
      collection: this.users
    });
    $('body').append(this.createUserView.render().el);

    // populate table
    // this.skills.fetch({
    //   success: function(model, response, options){
        this.skillsListView = new SkillsListView({collection: this.users});
        $('body').append(this.skillsListView.render().el);
        this.users.fetch({
          success: function(model, response, options){
            this.usersListView = new UsersListView({collection: this.users});
            $('thead').after(this.usersListView.render().el);
          }.bind(this),
          error: function(err){
            console.log(err);
          }
        });
      // }.bind(this),
      // error: function(err){
      //   console.log(err);
    //   }
    // });
  },

  submit: function(){
    this.createUserView = new CreateUserView({
      model: User
    });
    // $('body').html();
    $('body').html(this.createUserView.render().el);

  },

  initialize: function(options){
    // TODO: set listeners on models / collections
    return this;
  }
});

var appRouter = new AppRouter();