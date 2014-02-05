var EditUserView = Backbone.View.extend({

  initialize: function(){
    this.$el.attr("id", "editUserView");
    this.$el.attr("class", "twelve columns text-center");
  },

  events: {
    "submit": "submit"
  },

  submit: function(e){
    e.preventDefault();             // prevent default submission
    var user = this.getFormAttributes(e);
    console.log(user);
    // user.save();                    // call to server
    // this.collection.add(user);      // add this to current collection
    appRouter.navigate("", {trigger: true});
  },

  getFormAttributes: function(e){

    var userEmail = $(e.currentTarget).find('input[name="email"]').val();    // get email

    // find that user in Backbone collection
    return this.collection.find(function(model){
      return model.get('email') === userEmail;
    });

  },

  template: _.template(userTemplates.editSkillsByEmail),

  render: function(eventName){
    this.$el.html(this.template(this.model));
    return this;
  },

  destroy: function(){
    this.$el.remove();
  }
});