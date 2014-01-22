var UserEntryView = Backbone.View.extend({
  template: _.template(
    "<p>This is a user." +
       "<ul>" +
         "<li>Name:<%= name %></li>" +
         "<li>Email:<%= email %></li>" +
         // "<li>Skills: <% _.each(skills, function(value){" +
         //                  "<%= value %>" +
         //                "})%></li>" +
       "</ul>" +
     "</p>"
  ),
  render: function(eventName){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});