(function(exports) {

  function NoteView(notes) {
    this.notes = notes
  };

  NoteView.prototype = {

    add: function(note) {
      this.notes.push(note);
    }
  };

  exports.NoteView = NoteView;
})(this);
