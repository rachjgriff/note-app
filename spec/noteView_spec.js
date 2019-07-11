(function(exports) {

  function testNotesAddNote() {
    var notes = [];
    var noteView = new NoteView(notes);

    var note = "Lorem ipsum dolor sit amet.";
    noteView.add(note);

    assert.isTrue(noteView.notes.length === 1);
    // assert.isTrue(noteView.notes === ["Lorem ipsum dolor sit amet."]);
  };

  testNotesAddNote();
})(this);
