import Ember from 'ember';

let obsessions = [
  {
  title: "title",
  text: "With supporting text below as a natural lead-in to additional content.",
  footer: "footer"
  },
  {
  title: "title",
  text: "With supporting text below as a natural lead-in to additional content.",
  footer: "footer"
  },
  {
  title: "title",
  text: "With supporting text below as a natural lead-in to additional content.",
  footer: "footer"
  },
  {
  title: "title",
  text: "With supporting text below as a natural lead-in to additional content.",
  footer: "footer"
  },
  {
  title: "title",
  text: "With supporting text below as a natural lead-in to additional content.",
  footer: "footer"
  },
];

export default Ember.Route.extend({
  model() {
    return obsessions;
  }
});
