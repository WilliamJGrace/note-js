function Notelistview(notelist){
  this.noteList = notelist
};

Notelistview.prototype.getList = function () {
  return this.noteList
};

Notelistview.prototype.showList = function () {

  var list = this.getList().viewNotes();
  if(list.length === 0){
    throw new Error("There are no items in your list")
  }
  else{
    var list2 = "<ul><li><div>" +  list.join("</div></li><li><div>") + "</div></li></ul>"; 
    return list2;
  };
};
