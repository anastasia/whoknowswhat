var UserCollection = Backbone.Collection.extend({
  model: User,
  url: "/api/users/",
  sortAttribute: "skills",
  sortDirection: 1,

  getSkills: function(){
    var skillCount = {};
    this.fetch({
      async: false,
      success: function(model, response, options){
        _.each(response, function(user, key, collection){
          _.each(user.skills, function(skillLevel, skill){
            if (!skillCount[skill]) {
              skillCount[skill] = 1;
            } else {
              skillCount[skill] += 1;
            }
          });
        });
      }
    });
    return skillCount;
  },

  sortUsers: function(attr){
    this.sortAttribute = attr;
    this.sort();
  },

  comparator: function(a,b) {
    a = a.get(this.sortAttribute);
    b = b.get(this.sortAttribute);

    if (a === b) return 0;

    if (this.sortDirection === 1) {
      return a > b ? 1 : -1;
    } else {
      return a < b ? 1 : -1;
    }
  }
});
