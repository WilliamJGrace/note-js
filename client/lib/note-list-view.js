function Notelistview(notelist){
  this.noteList = notelist
};

Notelistview.prototype.getList = function () {
  return this.noteList
};

Notelistview.prototype.showList = function () {

  var list = this.getList().viewNotes();
  var listText = []
// loop to reduce characters down to 20
  for(var i=0;i<list.length;i++){
    listText.push(list[i].getNote().substr(0,20))
    // list[i] = list[i].substr(0,20)
  }
  // if(list.length === 0){
  //   throw new Error("There are no items in your list")
  // }
  // else{
    str = "<ul>"
    for(var i=0;i<list.length;i++){
      str = str.concat(`<li><div><a href=#notes/${list[i].id}>${listText[i]}</a></div></li>`)
    }
    str = str.concat("</ul>")
    console.log(str)
    return str
    // var list2 = "<ul><li><div><a href=notes`${}" +  listText.join("</div></li><li><div>") + "</div></li></ul>";
    // return list2;
  // };
};

// (function hi() {
//        window.addEventListener("hashchange", console.log("hihi"));
//      })();
