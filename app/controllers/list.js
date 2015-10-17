import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      editList: function() {
        this.set('isEditing', true);
      },
      acceptChanges: function() {
        this.set('isEditing', false);

        if (Ember.isEmpty(this.get('model.name'))) {
          this.send('removeList');
        } else {
          this.get('model').save();
        }
      },
      removeList: function() {
        var list = this.get('model');
        list.deleteRecord();
        list.save();
      }
  },

  isEditing: false,

});
