var userTemplates = {
  usersView:
    // "<tr>" +
      "<th column='name'>" +
        "<%= name %>" +
      "<% _.each(obj.skills, function(value, key){%>" +
        "<th><%= value %></th>" +
      "<% }) %>",
      // "<% }) %>" +
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
          "<th column='<%= key %>'><%= key %></th>" +
        "<% }) %>",
        // "<% }) %>" +
    //   "</thead>" +
    // "</table>",
  tableHeader:
    "<p>"

};