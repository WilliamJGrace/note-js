"use strict";


function Note(note){
  this.note = note
  this.id = null
};


Note.prototype.getNote = function () {
  return this.note
};
