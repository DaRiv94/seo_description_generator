

var NumberOfPhrases = require("./phrases.json").length //phrases.json
var {getDescription} = require("./helpers") //helpers.js

var mykeywords=["games","financiel freedoms","chocolate chip pancakes"]
// getDescription(keywordsList,phraseOptions=5)
var Description = getDescription(mykeywords, NumberOfPhrases)
console.log(Description)
