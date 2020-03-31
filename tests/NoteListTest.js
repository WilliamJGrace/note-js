// var note = new Note("New Note");
//
// (function(){
//   assert.isEqual(note.getNote(), "New Note")
// })()
"use strict";
import { describe, it, expect, matchers } from './test_framework.js';
var note = new Note("I'm a Note");
var notelist = new Notelist();


describe("NoteList", () => {
  describe("#createNotes", () =>{
      it("creates and stores a note", () =>{
        notelist.createNote("a note")
        notelist.createNote("another note")


        expect(notelist.viewNotes()).arrayToBe(["a note", "another note"])
      })
  })
})
