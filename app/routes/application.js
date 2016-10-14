import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let store = this.get('store');

    let blog_posts = 3;
    for(let i = 0; i < blog_posts; i++) {
      let title = "Recent Post #" + i;
      store.createRecord('obsession', {
        title: title,
        body: "blog post blog post blog post blog post blog post blog post blog post ",
        link: "home",
        footer: "footer"
      });
    }

    let pages = ["futurist","code","music","lego","author"];
    pages.forEach(function(item) {
      let num = this.indexOf(item);
      let title = "Title #" + num;
      store.createRecord('obsession', {
        title: title,
        body: "Zog does stuff Zog does stuff Zog does stuff Zog does stuff Zog does stuff ",
        link: item,
        footer: "footer"
      });
    }, pages);

/*
    let pages = 6;
    for(let i = 0; i < pages_length; i++) {
      let num = i + 1;
      let title = "Title #" + num;
      store.createRecord('obsession', {
        title: title,
        body: "Zog does stuff Zog does stuff Zog does stuff Zog does stuff Zog does stuff ",
        link: "home",
        footer: "footer"
      });
    }
*/

  }
});
