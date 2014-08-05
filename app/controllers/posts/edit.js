import Ember from 'ember';

export default Ember.Controller.extend({

  post: Ember.computed.alias('model'),

  actions: {

    updatePost: function() {
      var post = this.get('post');
      var self = this;

      post.save().then(function() {
        self.transitionTo('post', post);
      });

    }

  }

});
