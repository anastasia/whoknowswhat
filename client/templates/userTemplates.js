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
        // "<th><%= value %></th>" +
      "});" +
      "if (found === true) { %>" +
        "<th>Yes</th>" +
      "<%} else %><th>No</th>" +
    "<% }) %>",
    // "</tr>",
    // "<p>User <%= id %>:" +
    //    "<ul>" +
    //      "<li>" +
    //        "Name: <a href=\"mailto:<%= email %>?subject=Hi <%= name %>, I need help!\"><%= name %></a>" +
    //      "</li>" +
    //      "<li>Email: <%= email %></li>" +
    //      "<li>Skills: " +
    //        "<ul>"+
    //           "<% _.each(skills, function(value){%>" +
    //             "<li><%= value %></li>" +
    //           "<% }) %>" +
    //        "</ul>" +
    //      "</li>" +
    //    "</ul>" +
    //  "</p>",
  skillsView:
    // "<table class='skillsTable'>" +
    //   "<thead class='tableHeader'>" +
        "<th column='name'></th>" +
        "<% _.each(obj, function(value, key){%>" +
          "<th column='<%= key %>'><%= key %> (<%= value %>)</th>" +
        "<% }) %>",
        // "<% }) %>" +
    //   "</thead>" +
    // "</table>",
  tableHeader:
    "<p>"

};