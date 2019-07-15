(function(exports) {

  function testControllerInstantiated() {
    var notes = [];
    var noteView = new NoteView(notes);
    var noteModel = NoteModel;
    var controller = new Controller(noteView, noteModel);

    assert.isTrue(controller.noteView === noteView);
    assert.isTrue(controller.noteModel === noteModel);
  };

  testControllerInstantiated();

  function testUpdateDOM() {
    var notes = [];
    var noteView = new NoteView(notes);
    var noteModel = NoteModel;
    var controller = new Controller(noteView, noteModel);
    var note = new NoteModel("Hello World")
    noteView.add(note);

    var element = {};
    controller.updateDOM(element)

    assert.isTrue(element.innerHTML ===
      "<form><input type='text'></input><input type='submit'></input></form><p>Hello World</p>")
  };

  testUpdateDOM();
})(this);


// function testUpdateDOM() {
//   var noteView = [];
//   var noteModel = "Hello World!";
//   var controller = new Controller(noteView, noteModel);
//
//   var element = {};
//   controller.updateDOM(element)
//
//   assert.isTrue(element.innerHTML ===
//     "<form><input type='text'></input><input type='submit'></input></form><p>Hello World</p>")
// };
//
// testUpdateDOM();
