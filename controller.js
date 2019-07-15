(function(exports) {

  function Controller(noteView, noteModel, singleNote) {
    this.noteView = noteView;
    this.noteModel = noteModel;
    this.singleNote = singleNote;

    this._setup();
  };

  Controller.prototype = {
    _setup: function() {
      var self = this
      console.log(self)
      window.addEventListener("submit", function(event) {
        // stop the submission
        event.preventDefault()
        // create note
        var note = new self.noteModel(event.target[0].value);
        // add note into list
        self.noteView.add(note);

        console.log(self)


        var newNote = new self.singleNote(event.target[0].value)


        console.log(newNote)
        // extracts the dependany on the 'app' id in index.html
        var appIdElement = document.getElementById("listOfNotes");
        // update DOM with the view
        self.updateDOM(appIdElement)
      });
    },

    updateDOM: function(element1, element2) {
      var self = this
      element1.innerHTML = self.noteView.render()
      // element2.innerHTML = self.singleNote.renderSingle()
    }
  }

  exports.Controller = Controller
})(this);
