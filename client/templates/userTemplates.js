var userTemplates = {
  usersView:
    "<th column='name'>" +
      "<a href=\"mailto:<%= model.email %>?subject=Hi <%= model.name %>, I need help!\">" +
      "<%= model.name %>" +
    "</th>" +
    "<% _.each(skills, function(skill, key){" +
      "var found = false;" +
      "_.each(model.skills, function(value, key){" +
        "if (value === skill) found = true;" +
      "});" +
      "if (found === true) { %>" +
        "<th>Yes</th>" +
      "<%} else %><th>No</th>" +
    "<% }) %>",
  skillsView:
    "<th column='name'></th>" +
    "<% _.each(obj, function(value, key){%>" +
      "<th column='<%= key %>'><%= value %></th>" +
    "<% }) %>",
  tableHeader:
    "<p>"

};