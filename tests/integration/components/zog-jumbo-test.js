import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zog-jumbo', 'Integration | Component | zog jumbo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{zog-jumbo}}`);

  // Template block usage:
  this.render(hbs`
    {{#zog-jumbo}}
    Hello, world!
      This is a simple hero unit, a simple jumbotron-style component for calling extra ate block texttention to featured content or information.

      It uses utility classes for typography and spacing to space content out within the larger container.

        Learn more
    {{/zog-jumbo}}
  `);

  assert.equal(this.$().text().trim(), '');

});
