//longest word//
export function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      } else if (words[i].length === longest.length) {
        if (longest !== words[i]) {
          longest = words[i];
        }
      }
    }
    return longest;
  }
  // console.log(longestWord('The dog jumped over the shipyard fence'));
  
  //shortest Word//
  export function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    let shortestLength = shortest.length;
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortestLength) {
        shortest = words[i];
        shortestLength = words[i].length;
      } else if (words[i].length === shortestLength) {
        if (shortest !== words[i]) {
          shortest = words[i];
        }
      }
    }
    return shortest;
  }
  // console.log(shortestWord('The dog jumped over the shipyard fence'));
  
  // length//
  export function wordLengths(sentence) {
    const words = sentence.split(' ');
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
  }
  // console.log(wordLengths('The dog jumped over the shipyard fence'));