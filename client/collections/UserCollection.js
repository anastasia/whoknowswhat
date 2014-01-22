var UserCollection = Backbone.Collection.extend({
  model: User,
  url: "/api/users"
});
