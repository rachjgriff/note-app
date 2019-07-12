// on load, create the app
window.addEventListener('load', function() {
  console.log("Notes App Loaded")

  // this is where we store our list of note - return html string
  var noteView = new NoteView([])

  // this is where we create our new notes
  var noteModel = NoteModel

  // this is where we listens to submit, creates note, adds note to list, updates DOM
  var controller = new Controller(noteView, noteModel);

  // extracts the dependany on the 'app' id in index.html
  var appIdElement = document.getElementById("app");

  // creates the app - updates DOM
  controller.updateDOM(appIdElement);
})
