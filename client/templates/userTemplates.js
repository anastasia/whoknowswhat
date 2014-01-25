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
    "</thead>",
  topBarView:
    "<nav class='top-bar hide-for-small' data-topbar>" +
      "<ul class='title-area'>" +
        "<li class='name'>" +
          "<h1><a class='home' href='#/'>Skills Matrix</a></h1>" +
          // "<h1><a href='/'>Skills Matrix</a></h1>" +
        "</li>" +
      "</ul>" +

      "<section class='top-bar-section'>" +
        "<ul class='right'>" +
          "<li class='divider'></li>" +
          "<li>" +
            "<a class='submit' href='#/submit'>Submit</a>" +
            // "<a href='/submit'>Submit</a>" +
          "</li>" +
        "</ul>" +
      "</section>" +
    "</nav>"
};