var AppRouter = Backbone.Router.extend({

  routes: {
    "": "showSkills",
    "skills": "showSkills",
    "submit": "submit",
    "edit": "edit"
  },

  initialize: function(){
    var $topbar = $('<div>');
    var topbar = new TopBarView({model: new User()});
    $topbar.append(topbar.el);
    $('body').append($topbar);
    return this;
  },

  showSkills: function(){
    // destroy old views
    this.createUserView && this.createUserView.destroy();

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
    // destroy old views
    this.headerText && this.headerText.destroy();
    this.skillsListView && this.skillsListView.destroy();

    // render Create User Form
    this.createUserView = new CreateUserView({
      model: new User(),
      collection: this.users
    });

    $('body').append(this.createUserView.render().el);
  },

  edit: function(){
    // destroy old views
    this.headerText && this.headerText.destroy();
    this.skillsListView && this.skillsListView.destroy();

    // render Edit User Form
    this.editUserView = new EditUserView({
      model: new User(),
      collection: this.users
    });

    $('body').append(this.createUserView.render().el);
  }

});

var appRouter = new AppRouter();
