"use strict";
import { describe, it, expect, matchers } from './test_framework.js';

// singlenoteview = new Singlenoteview();

describe("Singlenoteview", () => {
  describe("#getNoteModel", () =>{
    it("returns a single note model", () => {
      var singlenoteview = new Singlenoteview("single note model");
      expect(singlenoteview.getNoteModel()).toBe("single note model")

    })
  })
  describe("#showNote", () => {
    it("retunrs a HTML string of the given note", () => {
      function NotemodelDouble(){

      }
      NotemodelDouble.prototype = {
        getNote: function() {
          return "Single Note"
        }

      }
      var singlenoteview = new Singlenoteview(new NotemodelDouble);
      expect(singlenoteview.showNote()).toBe("<div>Single Note</div>")
    })
  })
})
