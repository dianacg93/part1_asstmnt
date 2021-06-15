/**
 * You are given a book as input. Write a function that takes all the words in the book as an input and returns the frequency of each word. Consider how you will take in the input, what data structures to use, and edge cases other than the given example. Test your function with 3 different inputs other than the example, and show that it works for the edge cases as well.
 * Example:
 * Input: “Is your favorite car brand BMW? Mine is Toyota.” 
 * Output:
 * is->2
your->1
favorite->1
car->1
brand->1
BMW->1
mine->1
toyota->1
 */

const wordCount = (book) => {
    const dic = {};
    const words = book.split(" ");

    for(let word of words) {
        word = word.toLowerCase();
        let sanitizedWord = sanitize(word);
        if(!dic[sanitizedWord]){
            dic[sanitizedWord] = 1;
        } else {
            dic[sanitizedWord]++;
        }
    }

    return dic;
}

const isLetter = (input) => ((input.toLowerCase() !== input.toUpperCase()) || (input === " " || input === " "));

const sanitize = (word) => {
    let result = "";
    for( let i = 0; i < word.length; i++) {
        const el = word[i];
        if(isLetter(el)){
            result += el;
        }
    }

    return result;
}

const sample1 = "Is your favorite car brand BMW? Mine is Toyota.”";
const sample2 = "Hi, HerE iS A DiFfeRenT InPut, here is a normal input";
const sample3 = `saturday, 
friday, thursday-- november`;

// console.log(wordCount(sample1));
// console.log(wordCount(sample2));
console.log(wordCount(sample3));
