function Notelistview(notelist){
  this.noteList = notelist
};

Notelistview.prototype.getList = function () {
  return this.noteList
};

Notelistview.prototype.showList = function () {

  return this.getList().viewNotes();

};
