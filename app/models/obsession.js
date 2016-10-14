import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  link: DS.attr(),
  footer: DS.attr()
});
