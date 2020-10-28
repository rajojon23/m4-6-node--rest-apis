const { words } = require('../data/words');

// write your handlers here...

const getWord = (req, res) => {
    let wordID = req.params.id; 

    let word = words.find((word)=>{
        return  word.id == wordID ;
    });

    if(!word){
        res.status(400).json({
            status: 400,
            data: {"error" : "word not found"}
        });
    } else{
        res.status(200).json({
            status: 200,
            data: word
        });
    }

}

const getOneWord = (req, res) => {

    let randomWord = words[(Math.random() * words.length) | 0]


        res.status(200).json({
            status: 200,
            data: randomWord
        });


}


const guessLetter = (req, res) => {

    let guessedLetter = req.params.letter;
    let guessedWordID = req.params.id;

    let wordToGuess = words.find((word)=>{
        return  word.id == guessedWordID ;
    })["word"];


    console.log("the word to guess is ",wordToGuess);

    let guessArr = [];
    console.log("iterating through the word");
    [...wordToGuess].forEach((letter) => {
        if(letter.toLowerCase() == guessedLetter.toLowerCase()){
            guessArr.push(true);
        }else{
            guessArr.push(false);
        }
    })

 
    res.status(200).json({
        status: 200,
        data: guessArr
    });   


}

module.exports = {getWord , getOneWord, guessLetter};
