let nouns = ["Wolves", "Goblins", "Mice", "Cats", "Lizards", "Sisters", "Trolls", "Jokers", "Moonwalkers",  "Phantasy", "Marathon Runners", "Captains"] 
let adjectives = ["smelly", "hairy", "fat", "magical", "popular", "little", "awesome", "dirty", "ugly", "charming", "drunken"] 

let conjunctions = ["/", "-",  "#",  "&", "and",  "at", "of", "on", "in"]

let adverbs = ["tonight", "at dawn", "here", "angrily", "crying", ]

let verbs = ["rest", "sleep", "swig", "faint", "throw up", "somersault", ]




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

function albumTitleGenerator(bandName) {
  let secondWord = ""
  let thirdWord = "";
  let fourthWord = "";

  //Second word   - "the hhhkkl kiskacsa" = 19 char
  for(let i = 0; i < bandName.length; i++) {
    if((nouns.length >= bandName.length) && (bandName[i] === "a")) {
        secondWord = nouns[i]
    } else if ((nouns.length >= bandName.length) && (bandName[i] === "i")) {
        secondWord = nouns[i]
    } else {
      secondWord = nouns[bandName.length * 7 % 9]
    }  
  }

//Third word
  let counter = 0;
    for(let i = 0; i < bandName.length; i++) {  
        if ((bandName[i] === "a") || (bandName[i] === "i") || (bandName[i] === "o")) {
          counter += i
        }
  }
  thirdWord = verbs[(counter * bandName.length) % verbs.length]

//Fourt word
  let counter2 = 0;
    for(let i = 0; i < bandName.length; i++) {
      counter2 += bandName.charCodeAt(i); 
    }
  fourthWord = adverbs[counter2 % adverbs.length]  

  return `The ${secondWord} ${thirdWord} ${fourthWord}` 

}
    
console.log(albumTitleGenerator("the Wolves hairy"))
console.log(albumTitleGenerator("the Mice magical"))
console.log(albumTitleGenerator("the Lizards dirty"))
console.log(albumTitleGenerator("the Moonwalkers fat"))
console.log(albumTitleGenerator("the hsjdll glee"))
console.log(albumTitleGenerator("the Marathon Runners popular"))

