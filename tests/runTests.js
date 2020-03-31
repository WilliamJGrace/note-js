// var note = new Note("New Note");
//
// (function(){
//   assert.isEqual(note.getNote(), "New Note")
// })()
"use strict";
import { describe, it, expect, matchers } from './test_framework.js';
var note = new Note("I'm a Note");

describe("Note", () => {
  describe("#text", () =>{
      it("returns a note", () =>{

        expect(note.getNote()).toBe("I'm a Note")
      })
  })
})
