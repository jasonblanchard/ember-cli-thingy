import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ThingyAppENV.locationType
});

Router.map(function() {
  this.route("about", { path: "/about" });
  this.resource('posts', function() {
    this.resource('post', { path: '/:post_id' });
  });
});

export default Router;
