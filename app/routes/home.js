import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let obsessions = this.get('store').peekAll('obsession');
    return obsessions;
  }
});
