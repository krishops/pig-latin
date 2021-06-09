// Utility Logic
function checkVowel (text) {
  if(text === 'a' || text === 'A' || text === 'e' || text === 'E' || text === 'i' || text === 'I' || text === 'o' || text === 'O' || text === 'u' || text === 'U')
  {
    return true;
  }
  else 
  {
    return false;
  }
}
// Business Logic
function pigLatin(word) {

  if( checkVowel(word[0]) ){
    return word + "way";
  }
  else{  
    let marker=0;

    for(let index=0; index<word.length; index++)
    {
      if (checkVowel(word[index]))
      {
        marker = index;
        break;
      }
    }

    return word.slice(marker)  + word.slice(0,marker) + "ay";
  }
  


  // Test: "For words that begin with more than one consonant, it will move all consonants before the first vowel to the end of the word and add 'ay'."
  // Code: pigLatin("stop");
  // Expected Output: "opstay"

}


// UI Logic