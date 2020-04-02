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
      
      expect(notelistview.showList()).toBe("<ul><li><div>helloIamanotethatisl</div></li><li><div>hi</div></li></ul>")


    })
  })
})
