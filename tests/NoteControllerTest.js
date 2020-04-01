"use strict";
import { describe, it, expect, matchers } from './test_framework.js';

describe("Notecontroller", () => {
  it("can be instantiated", () => {
    let notecontroller = new Notecontroller("has instantiated");
    expect(notecontroller.noteList).toBe("has instantiated")
  });
  it("changed the HTML of app by id", () => {
    function NotelistviewDouble() {
    }
    NotelistviewDouble.prototype = {
        showList: function(){
          return "<ul><li><div>test</div></li><li><div>test2</div></li></ul>"
        }
      }

      let notecontroller = new Notecontroller(new NotelistviewDouble());
      notecontroller.noteListView = new NotelistviewDouble();
      notecontroller.outputToHTML()
      expect(document.getElementById('app').innerHTML).toBe("<ul><li><div>test</div></li><li><div>test2</div></li></ul>")

    })
  })
// });





// let notelist = new Notelist();
// notelist.createNote("Hi there")
// let notecontroller = new Notecontroller(notelist);
// notecontroller.outputToHTML();
