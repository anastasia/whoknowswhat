var AppRouter = Backbone.Router.extend({

  routes: {
    "": "showSkills",
    "skills": "showSkills",
    "submit": "submit"
  },

  initialize: function(){
    var $topbar = $('<div>');
    var topbar = new TopBarView({model: new User()});
    $topbar.append(topbar.el);
    $('body').append($topbar);
    return this;
  },

  // events: {
  //   "click": "submit"
  // },

  showSkills: function(){
    $('#createUserView').empty();

    this.headerText = new HeaderTextView();
    $('body').append(this.headerText.render().el);

    this.users = new UserCollection();

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
  },

  submit: function(){
    // render Create User Form
    // alert("HI")
    this.createUserView = new CreateUserView({
      model: new User(),
      collection: this.users
    });
    $('#skillsListView').empty();
    $('#hero').empty();
    $('body').append(this.createUserView.render().el);
  }

  // initialize: function(options){
  //   return this;
  // }
});

var appRouter = new AppRouter();
