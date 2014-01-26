var CreateUserView = Backbone.View.extend({

  initialize: function(){
    this.$el.attr( "id", "createUserView");
  },

  events: {
    "submit": "submit",
    "click button.addSkill": "addSkill"
  },

  submit: function(e){
    e.preventDefault();             // prevent default submission
    var user = this.getFormAttributes(e);
    user.save();                    // call to server
    this.collection.add(user);      // add this to current collection
    appRouter.navigate("", {trigger: true});
  },

  getFormAttributes: function(e){
    var newUserName = $(e.currentTarget).find('input[name="name"]').val();      // get form values
    var newUserEmail = $(e.currentTarget).find('input[name="email"]').val();    // get form values
    var newUserSkillList = [],
        newUserSkillLevels = [];
    $('input.skill').each(function(index, element){
      newUserSkillList.push(element.value);
    });
    $('select.skillList').each(function(index, element){
      newUserSkillLevels.push(element.value);
    });
    var newUserSkills = JSON.stringify(_.object(newUserSkillList, newUserSkillLevels));
    // var newUserSkills = $(e.currentTarget).find('input[name="skills"]').val();  // get form values
    return new User({           // Create a new person object
      name: newUserName,
      email: newUserEmail,
      skills: newUserSkills,
      collection: this.collection
    });
  },

  addSkill: function(e){
    e.preventDefault();
    var addSkillView = new AddSkillView({model: new User()});
    $('.addSkill').before(addSkillView.render().el); // append entry views to tbody
  },

  template: _.template(
    "<p>" +
      "Enter your skills here:" +
      "<form>" +
        "Name: <input name='name' placeholder='<%= attributes.name %>'></input><br>" +
        "Email: <input name='email' placeholder='<%= attributes.email %>'></input><br>" +
        userTemplates.addSkillView +
        "<button class='addSkill'>Add Skill</button><br>" +
        "<button type='submit'>Submit</button>" +
      "</form>" +
    "</p>"
  ),

  render: function(eventName){
    this.$el.html(this.template(this.model));
    return this;
  }
});