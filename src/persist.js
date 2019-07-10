// note-list-model
(function(exports) {
  function NoteStorage() {
    this.notes = [];
  };

  NoteStorage.prototype.noteStore = function(note) {
    this.notes.push(note)

    console.log(this.notes)
  };

  exports.NoteStorage = NoteStorage;
})(this);

// note variable/argument in noteStore is instance of Note class
// change name of noteStore - appendtonote/noteStore
// 
