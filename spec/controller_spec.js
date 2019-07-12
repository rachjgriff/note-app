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
})(this);
