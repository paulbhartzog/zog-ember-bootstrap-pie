import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zog-footer', 'Integration | Component | zog footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{zog-footer}}`);

  // Template block usage:
  this.render(hbs`
    {{#zog-footer}}
      Fixed bottom
    {{/zog-footer}}
  `);

  assert.equal(this.$().text().trim(), 'Fixed bottom');
});
