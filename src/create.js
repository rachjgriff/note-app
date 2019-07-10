(function(exports) {
  function Note() {
    this.content = null;
    this.title = null;
  };

  Note.prototype.create = function(content) {
    this.content = content;
    this.title = content.substring(0, 20);
  };

  Note.prototype.returnNoteContent = function() {
    return this.content
  };

  exports.Note = Note;
})(this);


/// Remove create function - all in the constructor - enter note as argument
