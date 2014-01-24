var submitTemplates = {
  formView:
    "<th column='name' class='firstRow'></th>" +
    "<% _.each(obj, function(value, key){%>" +
      "<th column='<%= value %>' class='firstRow'><%= value %></th>" +
    "<% }) %>",
  skillView: ""
};