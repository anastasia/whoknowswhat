var userTemplates = {
  usersView:
    "<p>User <%= id %>:" +
       "<ul>" +
         "<li>" +
           "Name: <a href=\"mailto:<%= email %>?subject=Hi <%= name %>, I need help!\"><%= name %></a>" +
         "</li>" +
         "<li>Email: <%= email %></li>" +
         "<li>Skills: " +
           "<ul>"+
              "<% _.each(skills, function(value){%>" +
                "<li><%= value %></li>" +
              "<% }) %>" +
           "</ul>" +
         "</li>" +
       "</ul>" +
     "</p>",
  skillsView:
    // "skills here!",
    "<% _.each(obj, function(value, key){%>" +
      "<li><%= key %></li>" +
    "<% }) %>",
  tableHeader:
    "<p>"

};