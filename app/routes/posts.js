import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "This is the first post",
        body: "This is the body blah dee blah"
      },
      {
        title: "This is another post, weee!",
        body: "Body body bodyyyyyy"
      }
    ]
  }
});
