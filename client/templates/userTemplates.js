var userTemplates = {
  usersView:
    "<th column='name'>" +
      "<a href=\"mailto:<%= model.email %>?subject=Hi <%= model.name %>, I need help!\">" +
      "<%= model.name %>" +
    "</th>" +
    "<% _.each(skills, function(skill, key){" +
      "var skillLevel = 'None';" +
      "_.each(model.skills, function(value, key){" +
        "if (key === skill){" +
          "skillLevel = value;" +
        "}"  +
      "});" +
      "%><th><%= skillLevel %></th>" +
    "<% }) %>",
  skillsView:
    "<thead>" +
      "<th column='name' class='firstRow'></th>" +
      "<% _.each(obj, function(value, key){%>" +
        "<th column='<%= value %>' class='firstRow'><%= value %></th>" +
      "<% }) %>" +
    "</thead>"
};