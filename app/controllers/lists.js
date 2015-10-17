import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createList: function() {
      var name = this.get('newName');
      if(!name) {return false;}
      if(!name.trim()) { return; }

      var list = this.store.createRecord('list', {
        name: name
      });

      // Clear the New List text field
      this.set('newName', '');

      list.save();
    }
  }
});
