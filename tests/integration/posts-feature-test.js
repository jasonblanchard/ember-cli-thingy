import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Posts feature', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Page contents", function() {
  visit('/posts').then(function() {
    equal(find('h1').length, 2, "Welcome to Ember.js");
  });
});
