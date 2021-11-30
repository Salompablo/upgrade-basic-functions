const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longest = ""
    for (var word of avengers) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
    }

console.log(findLongestWord(avengers));

