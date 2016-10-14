import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    this.get('store').push({
      data: [{
        id: 1,
        type: 'obsession',
        attributes: {
          title: "from push 1",
          body: "With supporting body below as a natural lead-in to additional content.",
          footer: "footer"
        },
        relationships: {}
      }, {
        id: 2,
        type: 'obsession',
        attributes: {
          title: "from push 2",
          body: "With supporting body below as a natural lead-in to additional content.",
          footer: "footer"
        },
        relationships: {}
      }]
    });

  }
});
