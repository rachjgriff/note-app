(function(exports) {

  function Controller(noteView, noteModel) {
    this.noteView = noteView;
    this.noteModel = noteModel;

    this._setup();
  }

  Controller.prototype = {
    _setup: function() {
      var self = this
      window.addEventListener("submit", function(event) {
        // stop the submission
        event.preventDefault()
        console.log(event)
        // create note
        var note = new self.noteModel()
        // add note into list
        self.noteView.add(note)
        // update DOM with the view
        self.updateDOM()
      });
    },

    updateDOM: function() {
      var self = this
      document.getElementById("app").innerHTML = self.noteView.render()
    }
  }

  exports.Controller = Controller
})(this);
