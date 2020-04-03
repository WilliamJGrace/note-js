"use strict";
import { describe, it, expect, matchers } from './test_framework.js';
var notelist = new Notelist();

notelist.createNote("helloIamanotethatislongerthan20characters")
notelist.createNote("hi")
var notelistview = new Notelistview(notelist);
describe("Notelistview", () =>{
  describe("#getList", () =>{
    it("returns the list it was instantiated with", () =>{
      expect(notelistview.getList()).toBe(notelist)
    })
  })
  describe("#showList", () => {
    it("joings the array and adds HTML", () => {

      expect(notelistview.showList()).toBe("<ul><li><div><a href=#notes/0>helloIamanotethatisl</a></div></li><li><div><a href=#notes/1>hi</a></div></li></ul>")

    })

    it("changes the url when clicked", () => {

    })
  })
})
