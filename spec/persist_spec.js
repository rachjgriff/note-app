// note-list-model

(function(exports) {

  function testNoteStorageCreation() {
    var noteStorage = new NoteStorage();
    assert.isTrue(noteStorage.notes.length === 0);
  };

  testNoteStorageCreation();

  function testNoteIsStoredInArray() {

    var note = new Note();
    note.create("Lorem");
    // Remove - need to hardcode this in (mocking/doubles)

    var noteStorage = new NoteStorage();
    noteStorage.noteStore();
    assert.isTrue(noteStorage.notes.length === 1);
  };

  testNoteIsStoredInArray();

})(this);
