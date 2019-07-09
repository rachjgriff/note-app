//Test to create a note entry
//Check that a title is created automatically
//from a note entry
//Check that a note has content

//Create note is intialised with title
//(first 20 chars of content)
//and content
//Potentially id created at later point

(function(exports){
  function testNoteHasContent() {
    var note = new Note();

    if (note.content !== "Hello world!") {
      throw new Error("Note is not Hello world!");
    };
  };

  testNoteHasContent();
})(this);
