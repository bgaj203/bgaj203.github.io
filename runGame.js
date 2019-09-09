let wordList;

function main() {
    readFile()
}

function readFile() {
    fetch('words_temp.txt')
    .then(Response => Response.text())
    .then(Response => Response.toString())
    .then(wordList => console.log(wordList.split("\n")));
}

