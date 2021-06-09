// Utility Logic
function checkVowel(text) {
  if (text === 'a' || text === 'A' || text === 'e' || text === 'E' || text === 'i' || text === 'I' || text === 'o' || text === 'O' || text === 'u' || text === 'U') {
    return true;
  }
  else {
    return false;
  }
}
// Business Logic
function pigLatin(word) {
  if (checkVowel(word[0])) {
    return word + "way";
  }
  else {
    if ((word[0] === 'q' || word[0] === 'Q') && (word[1] === 'u' || word[1] === 'U')) {
      return word.slice(2) + word.slice(0, 2) + "ay";
    }

    let marker = 0;
    for (let index = 0; index < word.length; index++) {
      if (checkVowel(word[index])) {
        if (!(word[index] === 'u' && word[index - 1] === 'q')) {
          marker = index;
          break;
        }
      }
    }
    return word.slice(marker) + word.slice(0, marker) + "ay";
  }
}


// UI Logic