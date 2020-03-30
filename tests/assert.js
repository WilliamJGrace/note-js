function hasPassed(){
  console.log("Tests passed")
};
var assert = {
  isEqual: function(statement1, statement2){
    // THIS IS A FUNCTION TO TEST IF TWO ARRAYS EQUAL EACH OTHWRE
    // if(typeOf(statement1) == Array && typeOf(statement1) == Array) {
    //   if (!(statement1.length === statement2.length && statement1.sort().every(function(value, index) { return value === statement2.sort()[index]})) {
    //   throw new Error("Arrays do not equal each other!")
    // }};
    if(statement1 !== statement2){
      throw new Error("Statements do not equal each other!")
    }
    else {
      hasPassed()
    };


  }


}
