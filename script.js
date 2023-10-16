let nouns = ["Wolves", "Goblins", "Mice", "Cats", "Lizards", "Sisters", "Trolls", "Jokers", "Moonwalkers",  "Phantasy", "Marathon Runners", "Captains"] 
let adjectives = ["smelly", "hairy", "fat", "magical", "popular", "little", "awesome", "dirty", "ugly", "charming", "drunken"] 

let conjunctions = ["/", "-",  "#",  "&", "and",  "at", "of", "on", "in"]

let adverb = ["tonight", "at dawn", "here", "angrily", "crying", ]

let verb = ["rest", "sleep", "swig", "faint", "throw up", "somersault", ]


function bandNameGenerator(string){  //awesome 6                  //The returned band name shouldn't contain the string given as an argument
  let theNoun = ""
  let theAdjective = ""
  if (string.length < adjectives.length){ 
    theAdjective = adjectives[string.length] 
  } else {
    theAdjective = adjectives[string.length % 10] 

  }
  if ((string.charCodeAt(string.length-1) -97) < nouns.length) { 
    theNoun = nouns[string.charCodeAt(string.length-1)- 97]
    } else {
    theNoun = nouns[(string.charCodeAt(string.length-1)-97) % 10]
  }
  return `The ${theAdjective} ${theNoun}`
}






 //Album title generator: The (nouns) (verbs) (adverbs)



function albumTitleGenerator(bandNameGenerator) {
    let secondWord = ""
    let thirdWord = "";
    let fourthWord = "";

    for(let i = 0; i < bandNameGenerator.length; i++)
    if(bandNameGenerator.length <= 10) {
        if(bandNameGenerator[i] === "a") {
            if (nouns.length < i) {
                secondWord = nouns[i];
            } else {
                secondWord = nouns[nouns.length - i % 7]
            }
        
          {
             
        } 


    }
    }

    return `The ${secondWord} ${thirdWord} ${fourthWord}` 
}

let string = "nemmegyaz";
console.log(bandNameGenerator(string))
//console.log(albumTitleGenerator)



