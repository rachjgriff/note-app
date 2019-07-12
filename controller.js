(function(exports) {

  function Controller(noteView, noteModel) {
    this.noteView = noteView;
    this.noteModel = noteModel;

    this._setup();
  };

  Controller.prototype = {
    _setup: function() {
      var self = this
      window.addEventListener("submit", function(event) {
        // stop the submission
        event.preventDefault()
        // create note
        var note = new self.noteModel(event.target[0].value)
        // add note into list
        self.noteView.add(note)
        // extracts the dependany on the 'app' id in index.html
        var appIdElement = document.getElementById("app");
        // update DOM with the view
        self.updateDOM(appIdElement)
      });
    },

    updateDOM: function(element) {
      var self = this
      element.innerHTML = self.noteView.render()
    }
  }

  exports.Controller = Controller
})(this);
