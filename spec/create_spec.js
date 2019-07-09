//Test to create a note entry
//Check that a title is created automatically
//from a note entry
//Check that a note has content

//Create note is intialised with title
//(first 20 chars of content)
//and content
//Potentially id created at later point

(function(exports) {

  function testNoteHasContent() {
    var note = new Note();
    assert.isTrue(note.content === null)
  };

  testNoteHasContent();

  function testNoteHasTitle() {
    var note = new Note();
    assert.isTrue(note.title === null)
  };

  testNoteHasTitle();

  function testNoteCreation() {
    var note = new Note();
    note.create("Lorem ipsum dolor sit amet.")
    assert.isTrue(note.content === "Lorem ipsum dolor sit amet.")
    assert.isTrue(note.title === "Lorem ipsum dolor si")
  };

  testNoteCreation();

})(this);
