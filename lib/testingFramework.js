(function(exports) {

  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      };
    }
  };

  exports.assert = assert;

})(this);






// (function(exports) {
//   exports.testFramework = {
//     assert: assert,
//   }
// })(this)
