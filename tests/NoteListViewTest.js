"use strict";
import { describe, it, expect, matchers } from './test_framework.js';
var notelist = new Notelist();
notelist.createNote("hello")
notelist.createNote("hi")
var notelistview = new Notelistview(notelist);
describe("Notelistview", () =>{
  describe("#getList", () =>{
    it("returns the list it was instantiated with", () =>{
      expect(notelistview.getList()).toBe(notelist)
    })
  })
  describe("#showList", () => {
    it("shows an array", () => {
      // console.log(notelistview.showList())
      expect(notelistview.showList()).toBe("<ul><li><div>hello</div></li><li><div>hi</div></li></ul>")


    })
  })
})
