// on load, create the app
window.addEventListener('load', function() {

  // this is where we store our list of note - return html string
  var noteView = new noteView([])

  // this is where we create our new notes
  var noteModel = NoteModel

  // this is where we listens to submit, creates note, adds note to list, updates DOM
  var controller = new NotesController(noteView, noteModel);
  
  // creates the app - updates DOM
  controller.updateDOM();
})