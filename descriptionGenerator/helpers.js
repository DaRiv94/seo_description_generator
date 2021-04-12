
var format = require("string-template")
var phrases = require("./phrases.json")

//requires phrases in file for function
function getPhraseById(id){
    return phrases.find(element => element.id == id);
}

function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}


function getDescription(keywordsList,phraseOptions=5){
    var num_keywords = keywordsList.length
    var phrase_ids=[]
    var populatedPhrases=[]

    //Get Random Phrase Ids
    while(phrase_ids.length<num_keywords){
        const randomNum = Math.floor(Math.random() * phraseOptions);
        if(phrase_ids.includes(randomNum)){
            continue
        }else{
            phrase_ids.push(randomNum)
        }
    }

    //Populate the keywords for phrase_ids
    for(i=0;i<num_keywords;i++){
        populatedPhrase = format(getPhraseById(phrase_ids[i]).phrase, [keywordsList[i]])
        populatedPhrases.push(populatedPhrase)
    }

    //create description from populated phrases
    let Description = ""
    for(i=0;i<populatedPhrases.length;i++){
        Description += `${capitalize(populatedPhrases[i])}. `
    }

    return Description
}


exports.getDescription = getDescription;