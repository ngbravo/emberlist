import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('list');
    },
    actions: {
        createList(newTitle) {
           this.store.createRecord('list', {
               title: newTitle
           }).save();
        },
        updateList(list) {
            list.save();
        },
        deleteList(list) {
          list.get('categories').toArray().forEach(function(category){
            category.destroyRecord();
          });
          list.destroyRecord();
        },
        cloneList(list){
          //TODO clone list
        }
    }
});
