function Notecontroller(noteList){
  this.noteList = noteList
  this.noteListView = new Notelistview(noteList);
};

Notecontroller.prototype.outputToHTML = function () {
  document.getElementById('app').innerHTML = this.noteListView.showList()

};

//Will need to delete code below to stop errors when testing

let notelist = new Notelist();
let note1 = new Note("Hi there");
notelist.createNote(note1)
let notecontroller = new Notecontroller(notelist);
notecontroller.outputToHTML();

function hi() {
       window.addEventListener("hashchange", console.log("hihi"));
     }
hi()
