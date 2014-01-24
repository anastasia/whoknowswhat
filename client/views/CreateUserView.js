var CreateUserView = Backbone.View.extend({
  events: {
    "submit": "submit"
  },

  submit: function(e){
    e.preventDefault();             // prevent default submission
    var newUserName = $(e.currentTarget).find('input[name="name"]').val();      // get form values
    var newUserEmail = $(e.currentTarget).find('input[name="email"]').val();    // get form values
    var newUserSkills = $(e.currentTarget).find('input[name="skills"]').val();  // get form values
    var user = new User({           // Create a new person object
      name: newUserName,
      email: newUserEmail,
      skills: newUserSkills,
      collection: this.collection
    });                             
    user.save();                    // call to server
    this.collection.add(user);      // add this to current collection
  },

  template: _.template(
    "<p>" +
      "Enter your skills here:" +
      "<form>" +
        "Name: <input name='name' placeholder='<%= attributes.name %>'></input>" +
        "Email: <input name='email' placeholder='<%= attributes.email %>'></input>" +
        "Skills: <input name='skills' placeholder='Angular, Backbone'></input>" +
        "<button type='submit'>Submit</button>" +
      "</form>" +
    "</p>"
  ),
  render: function(eventName){
    this.$el.html(this.template(this.model));
    return this;
  }
});