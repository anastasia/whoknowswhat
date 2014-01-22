var userTemplates = {
  userView:
    "<p>User <%= id %>:" +
       "<ul>" +
         "<li>Name: <%= name %></li>" +
         "<li>Email: <%= email %></li>" +
         "<li>Skills: " +
           "<ul>"+
              "<% _.each(skills, function(value){%>" +
                "<li><%= value %></li>" +
              "<% }) %>" +
           "</ul>" +
         "</li>" +
       "</ul>" +
     "</p>"
};