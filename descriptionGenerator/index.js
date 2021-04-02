var NumberOfPhrases = require("../phrases.json").length //phrases.json
var {getDescription} = require("../helpers") //helpers.js

module.exports = async function (context, req) {

    var description = ""
    const keywords = (req.body && req.body.keywords);

    if(!keywords){
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "Must have keywords in body as list"
        };
    }else{
        description = getDescription(keywords, NumberOfPhrases)
        context.res = {
            // status: 200, /* Defaults to 200 */
            headers: {
                'Content-Type': 'application/json'
            },
            body: {details: description}
        };
    }
}