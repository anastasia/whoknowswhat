var CreateUserView = Backbone.View.extend({
  events: {
    "submit": "submit"

  },

  submit: function(e){
    debugger;
    e.preventDefault();  // preventing default submission..
    var newUserName = $(e.currentTarget).find('input[name="name"]').val();  // getting new form values..
    var newUserEmail = $(e.currentTarget).find('input[name="email"]').val();  // getting new form values..
    var newUserSkills = $(e.currentTarget).find('input[name="skills"]').val();  // getting new form values..
    var user = new User({
      name: newUserName,
      email: newUserEmail,
      skills: newUserSkills
    });// creating a new person object..
    this.collection.add(user); // adding this to current collection..
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
    // debugger;
    console.log(this.model.sync);
    this.$el.html(this.template(this.model));
    return this;
  }
});