(function(exports) {

  function SingleNote(note) {
    this.note = note;
  };

  SingleNote.prototype = {

    renderSingle: function() {
      return ["<p>" + this.note + "</p>"].join('')
    }
  };

  exports.SingleNote = SingleNote
})(this);
