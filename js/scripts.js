// Utility Logic

// Business Logic
function pigLatin(word) {

  if(word[0] === 'a' || word[0] === 'A' || word[0] === 'e' || word[0] === 'E' || word[0] === 'i' || word[0] === 'I' || word[0] === 'o' || word[0] === 'O' || word[0] === 'u' || word[0] === 'U')
  {
      return word + "way";
  }

  //Test: "For words that begin with a consonant, it will move the consonant to the end of the word and add 'ay'."
  //Code: pigLatin("book");
  //Expected Output: "ookbay"

}


// UI Logic