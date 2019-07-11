// (function(exports) {
//
//   function testNotesAddNote() {
//     var notes = [];
//     var noteView = new NoteView(notes);
//
//     var note = "Lorem ipsum dolor sit amet.";
//     noteView.add(note);
//
//     assert.isTrue(noteView.notes.length === 1);
//     assert.isTrue(noteView.notes[0] === "Lorem ipsum dolor sit amet.");
//   };
//
//   testNotesAddNote();
//
//   function testRenderNotes() {
//     var notes = [];
//     var noteView = new NoteView(notes);
//
//     var note = "Hello World";
//     noteView.add(note);
//
//     assert.isTrue(noteView.render() ===
//       "<form><input type='text'></input><input type='submit'></input></form><p>Hello World</p>")
//   };
//
//   testRenderNotes();
// })(this);
