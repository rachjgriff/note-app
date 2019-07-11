function Controller(noteView, noteModel) {
  this.noteView = noteView;
  this.noteModel = noteModel;


  this._setup;
}

Controller.prototype = {
  _setup: function() {
    var self = this
    window.addEventListener("submit", function(event) {
      event.preventDefault()
      console.log(event)
      // create
      var note = new self.noteModel()
      // add note to list
      self.noteView.add(note)
      // update DOM with the view
      // array.map(function(note))
      // form
      self.updateDOM()
    });
  },

  updateDOM: function() {
    document.getElementById("app").innerHTML = this.noteView.render()
  }
}
