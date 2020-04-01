function Notecontroller(noteList){
  this.noteList = noteList
  this.noteListView = new Notelistview(noteList);
};

Notecontroller.prototype.outputToHTML = function () {
  document.getElementById('app').innerHTML = this.noteListView.showList()

};
// let notelist = new Notelist();
// notelist.createNote("Hi there")
// let notecontroller = new Notecontroller(notelist);
// notecontroller.outputToHTML();
