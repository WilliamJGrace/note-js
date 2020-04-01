"use strict";
import { describe, it, expect, matchers } from './test_framework.js';

describe("Notecontroller", () => {
  it("can be instantiated", () => {
    let notecontroller = new Notecontroller("has instantiated");
    expect(notecontroller.noteList).toBe("has instantiated")
  });
});

// let notelist = new Notelist();
// notelist.createNote("Hi there")
// let notecontroller = new Notecontroller(notelist);
// notecontroller.outputToHTML();
