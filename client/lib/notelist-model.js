"use strict";


function Notelist(note){
  this.noteList = []
};


Notelist.prototype.viewNotes = function () {
  return this.noteList
};

Notelist.prototype.createNote = function (note) {
  this.noteList.push(note)
};
