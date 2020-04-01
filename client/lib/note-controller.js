function Notecontroller(noteList){
  this.noteList = noteList
  this.noteListView = new Notelistview(noteList);
};

Notecontroller.prototype.outputToHTML = function () {
  document.getElementById('app').innerHTML = this.noteListView.showList()

};

//Will need to delete code below to stop errors when testing

let notelist = new Notelist();
notelist.createNote("Hi there")
let notecontroller = new Notecontroller(notelist);
notecontroller.outputToHTML();
