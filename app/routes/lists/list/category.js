import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.find('category', params.category_id);
    },
    actions: {

    }
});
