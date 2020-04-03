function Notecontroller(noteList){
  this.noteList = noteList
  this.noteListView = new Notelistview(noteList);
};

Notecontroller.prototype.outputToHTML = function () {
  document.getElementById('app').innerHTML = this.noteListView.showList()

};

Notecontroller.prototype.hashChange = function () {
  window.addEventListener("hashchange",
  (location) => {
    var id = window.location.hash.split("notes/")[1]
    var singlenoteview = new Singlenoteview(this.noteList.noteList[id])
    document.getElementById('app').innerHTML = singlenoteview.showNote();
      })
    }




//Will need to delete code below to stop errors when testing

let notelist = new Notelist();
notelist.createNote("Hi there")
notelist.createNote("HEllo there")

let notecontroller = new Notecontroller(notelist);

notecontroller.outputToHTML();
notecontroller.hashChange();
