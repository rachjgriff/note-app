function Controller(noteView, noteModel) {
  this.noteView = noteView;
  this.noteModel = noteModel;

  this._setup;
}

Controller.prototype = {
  _setup: function() {
    window.addEventListener("submit", function(event) {

      event.preventDefault()
      // create
      var note = new NoteModel(userInput)
      // add note to list
      noteView.add(note)
      // update DOM with the view
      array.map(function(note))
      form
      updateDOM()
    });
  };

  updateDOM: function() {
    document.getElementById('app').innerHTML.render()
  }
}
