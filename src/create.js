(function(exports) {
  function Note() {
    this.content = null;
    this.title = null;
  };

  Note.prototype.create = function(content) {
    this.content = content
    this.title = content.substring(0, 20)
  };

  exports.Note = Note;
})(this);
