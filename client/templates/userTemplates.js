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
      "<th></th>" +
      "<% _.each(obj, function(value, key){%>" +
        "<th class='text-center'><%= value %></th>" +
      "<% }) %>" +
    "</thead>",
  topBarView:
    "<nav class='top-bar hide-for-small' data-topbar>" +
      "<ul class='title-area'>" +
        "<li class='name'>" +
          "<h1><a class='home' href='#/'><img style='height: 30px' src='https://hrhq.squarespace.com/assets/images/logo@2x.png'/> Skills Matrix</a></h1>" +
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
    "</nav>",
  addSkillView:
    "Skill: <input name='skills' class='skill' placeholder='e.g., Angular'></input>" +
       "<select class='skillList'>" +
         "<option value = 'Some'>Some (I've used this)</option>" +
         "<option value = 'Good'>Good (I can use this)</option>" +
         "<option value = 'Expert'>Expert (I can teach this)</option>" +
       "</select><br>",
  headerText:
    "<h1>Welcome to the Hack Reactor skills matrix.</h1>" + 
    "<p>See the table below to find the right person to ask for help.</p>"
};