import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zog-jumbo', 'Integration | Component | zog jumbo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{zog-jumbo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#zog-jumbo}}
      template block text
    {{/zog-jumbo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
