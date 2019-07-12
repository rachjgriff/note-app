(function(exports) {

  function NoteView(notes) {
    this.notes = notes
  };

  NoteView.prototype = {

    add: function(note) {
      this.notes.push(note);
    },

    render: function() {
      return [
        "<form>",
          "<input type='text'></input>",
          "<input type='submit'></input>",
        "</form>",
        this.notes.map(function(note) {
          return "<p>" + note.text.substring(0, 20) + "</p>"
        }).join('')
      ].join('')
    },
  };

  exports.NoteView = NoteView;
})(this);
