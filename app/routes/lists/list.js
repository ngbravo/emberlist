import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.find('list', params.list_id);
    },
    actions: {
      createCategory(newTitle) {
         let list = this.modelFor(this.routeName);
         this.store.createRecord('category', {
             title: newTitle
         }).save().then(function(category){
           list.get('categories').pushObject(category);
           list.save();
         });
      },
      updateCategory(category) {
          category.save();
      },
      deleteCategory(category) {
          category.destroyRecord();
      }
    }
});
