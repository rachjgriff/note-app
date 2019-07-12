(function(exports) {

  function testRenderSingleNotes() {
    var note = "Hello World"
    var singleNote = new SingleNote(note)

    assert.isTrue(singleNote.renderSingle() === "<p>Hello World</p>");

  };

  testRenderSingleNotes();
})(this);
