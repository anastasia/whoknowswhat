var Skills = Backbone.Collection.extend({
  model: Skill,
  url: "/api/skills/",
  totalList: []
});
