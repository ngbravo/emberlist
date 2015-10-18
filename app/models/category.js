import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  list: DS.belongsTo('list',{async:false}),
  todos: DS.hasMany('todo')
});
