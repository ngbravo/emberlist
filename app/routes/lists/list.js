import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.find('list', params.list_id);
    },
    actions: {

    }
});
