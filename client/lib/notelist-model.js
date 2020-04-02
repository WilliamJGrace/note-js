"use strict";


function Notelist(note){
  this.noteList = []

};


Notelist.prototype.viewNotes = function () {
  return this.noteList
};

Notelist.prototype.createNote = function (text) {
  var note = new Note(text)
  note.id = this.noteList.length
  this.noteList.push(note)
};
