import DS from "ember-data";

var List = DS.Model.extend({
  name: DS.attr('string')
});

export default List;
