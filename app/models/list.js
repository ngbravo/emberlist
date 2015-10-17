import DS from "ember-data";

var List = DS.Model.extend({
  name: DS.attr('string')
});

List.reopenClass({

FIXTURES:[
  {
    id: 1,
    name: 'una lista'
  },
  {
    id: 2,
    name: 'otra lista'
  }
]

});

export default List;
