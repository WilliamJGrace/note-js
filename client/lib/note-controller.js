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
    // event.preventDefault()
    var id = window.location.hash.split("notes/")[1]
    var singlenoteview = new Singlenoteview(this.noteList.noteList[id])
    document.getElementById('app').innerHTML = singlenoteview.showNote();
      })
    }

Notecontroller.prototype.textFormSubmit = function () {
  document.getElementById("text").addEventListener("submit", () => {
      text = document.getElementById('input').value
      this.noteList.createNote(text)
      this.noteListView = new Notelistview(this.noteList);
      this.outputToHTML();
      event.preventDefault()
    });
};




//Will need to delete code below to stop errors when testing

let notelist = new Notelist();
notelist.createNote("Hi there")
notelist.createNote("HEllo there")

let notecontroller = new Notecontroller(notelist);

notecontroller.outputToHTML();
notecontroller.hashChange();
notecontroller.textFormSubmit();
