import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ThingyAppENV.locationType
});

Router.map(function() {
  this.route("about", { path: "/about" });
  this.resource('posts', function() {
    this.route("new", { path: "/new" });
    this.resource('post', { path: '/:post_id' });
    this.route('edit', { path: '/:post_id/edit'});
  });
});

export default Router;
