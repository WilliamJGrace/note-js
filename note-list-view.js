function Notelistview(notelist){
  this.noteList = notelist
};

Notelistview.prototype.getList = function () {
  return this.noteList
};

Notelistview.prototype.showList = function () {

  var list = this.getList().viewNotes();
  // for(var i=0;i<list.length;i++){
    var list2 = "<ul><li><div>" +  list.join("</div></li><li><div>") + "</div></li></ul>"; 
  //   return "<li><div>" + list[i] + "</div></li>"
  // }
return list2
};
