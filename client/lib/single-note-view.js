"use strict";

function Singlenoteview(notemodel){
  this.noteModel = notemodel

}

Singlenoteview.prototype.getNoteModel = function () {
  return this.noteModel

};

Singlenoteview.prototype.showNote = function () {
  var note = this.getNoteModel().getNote()
  return `<div>${note}</div>`
}
