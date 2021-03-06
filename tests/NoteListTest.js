// var note = new Note("New Note");
//
// (function(){
//   assert.isEqual(note.getNote(), "New Note")
// })()
"use strict";
import { describe, it, expect, matchers } from './test_framework.js';
var note = new Note("a note");
var note2 = new Note("another note");
var notelist = new Notelist();


describe("NoteList", () => {
  describe("#createNotes", () =>{
      it("creates and stores a note", () =>{
        notelist.createNote(note)
        notelist.createNote(note2)
        console.log(notelist)
        console.log(notelist.viewNotes()
      )
        expect(notelist.viewNotes()).arrayToBe([notelist.noteList[0] , notelist.noteList[1]])
      })
  })


})
