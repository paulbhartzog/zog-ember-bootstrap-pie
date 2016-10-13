import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('music');
  this.route('lego');
  this.route('author');
  this.route('code');
  this.route('futurist');
});

export default Router;
