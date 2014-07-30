import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {
      title: "This is the first post",
      body: "This is the body blah dee blah"
    };
  }
});
