function Notecontroller(noteList){
  this.noteList = noteList
  this.noteListView = new Notelistview(noteList);
};

Notecontroller.prototype.outputToHTML = function () {
  document.getElementById('app').innerHTML = this.noteListView.showList()

};

Notecontroller.prototype.hashChange = function () {
  window.addEventListener("hashchange", () => {console.log("hihi")});

};

//Will need to delete code below to stop errors when testing

let notelist = new Notelist();
notelist.createNote("Hi there")
notelist.createNote("HEllo there")

let notecontroller = new Notecontroller(notelist);

notecontroller.outputToHTML();
notecontroller.hashChange();
