let Sentence="cloud vandana"
let revstr=Sentence.split(" ").map(e=>[...e].reverse().join("")).join(" ")
console.log(revstr)

