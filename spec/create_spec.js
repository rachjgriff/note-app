(function(exports) {

  function testNoteHasContent() {
    var note = new Note();
    assert.isTrue(note.content === null);
  };

  testNoteHasContent();

  function testNoteHasTitle() {
    var note = new Note();
    assert.isTrue(note.title === null);
  };

  testNoteHasTitle();

  function testNoteCreation() {
    var note = new Note();
    note.create("Lorem ipsum dolor sit amet.");
    assert.isTrue(note.content === "Lorem ipsum dolor sit amet.");
    assert.isTrue(note.title === "Lorem ipsum dolor si");
  };

  testNoteCreation();

  function testNoteContentReturned() {
    var note = new Note();
    note.create("Lorem ipsum dolor sit amet.");
    assert.isTrue(note.returnNoteContent() === "Lorem ipsum dolor sit amet.");
  };

  testNoteContentReturned();

})(this);
