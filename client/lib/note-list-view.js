function Notelistview(notelist){
  this.noteList = notelist
};

Notelistview.prototype.getList = function () {
  return this.noteList
};

Notelistview.prototype.showList = function () {

  var list = this.getList().viewNotes();
// loop to reduce characters down to 20
  for(var i=0;i<list.length;i++){
    list[i] = list[i].getNote();
    list[i] = list[i].substr(0,20)
  }
  if(list.length === 0){
    throw new Error("There are no items in your list")
  }
  else{
    var list2 = "<ul><li><div>" +  list.join("</div></li><li><div>") + "</div></li></ul>";
    return list2;
  };
};

(function hi() {
       window.addEventListener("hashchange", console.log("hihi"));
     })();
