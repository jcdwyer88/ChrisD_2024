// import yesNo from 'yes-no-words'
 const yesNo = import("yes-no-words")


 const wordArr = []
 for (let index = 0; index < 5; index++) {
    wordArr.push(yesNo.yesRandom())
 }
console.log(wordArr);