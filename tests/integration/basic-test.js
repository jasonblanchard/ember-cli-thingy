import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('An Integration test', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Page contents", function() {
  visit('/').then(function() {
    equal(find('#title').length, 1, "Welcome to Ember.js");
  });
});
