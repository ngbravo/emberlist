import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', {path:'/'}, function() {
    this.route('categories', {}, function() {
      this.route('items', {}, function() {
        this.route('complete', {});
        this.route('incomplete', {});
      });
    });
  });
});

export default Router;
