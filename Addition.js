function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let firstnum = getRandomInt(1, 5);
let secnum = getRandomInt(1, 4);

const maleNames = [
    "Michael", "Christopher", "Matthew", "David", "James", "John", "Joshua", "Daniel", 
    "Oliver", "Noah", "Jack", "Henry", "William", "Leo", "Charlie", "Theodore",
    "Liam", "Ethan", "Alexander", "Sebastian", "Benjamin", "Caleb", "Dylan", "Gavin"
];

const fruitnames = [
    "apple", "carrot", "pineapple"
];

const fruiticons = [
    "\u{1F34E}", "\u{1F955}", "\u{1F34D}"
];

selfruit = getRandomInt(0, fruitnames.length - 1);

document.getElementById("word-problem").textContent = maleNames[getRandomInt(0, maleNames.length - 1)] + " has " + firstnum + " " + fruitnames[selfruit] + "s".repeat(firstnum > 1) + " if he gets " + secnum + " more " + fruitnames[selfruit] + "s".repeat(secnum > 1) + " how many does he have?\n" + fruiticons[selfruit].repeat(firstnum) + " + " + fruiticons[selfruit].repeat(secnum) + " = ?";

var ans = firstnum + secnum;
var answers = [];

var tmp = getRandomInt(2, 9);
var i = 0;
while (i < 3)
{
    while (tmp == ans || answers.includes(tmp))
    {
        tmp = getRandomInt(2, 9);
    }
    answers[i] = tmp;
    i += 1;
}

var ansloc = getRandomInt(0, 2);
answers[ansloc] = ans;

var btnAns1 = document.querySelector("#btnAns1");
btnAns1.textContent = answers[0];
var btnAns2 = document.querySelector("#btnAns2");
btnAns2.textContent = answers[1];
var btnAns3 = document.querySelector("#btnAns3");
btnAns3.textContent = answers[2];

function is_correct(i)
{
    if (i == ansloc)
    {
        return true;
    }
    return false;
}

var synth = window.speechSynthesis;
var output = document.getElementById("output")

btnAns1.addEventListener("click", ()=>
{
    if (is_correct(0))
    {
        output.textContent = "Correct!"
    }
    else
    {
        output.textContent = "Incorrect!"
    }
    var message = new SpeechSynthesisUtterance(output.textContent);
    synth.speak(message);
});
btnAns2.addEventListener("click", ()=>
{
    if (is_correct(1))
    {
        output.textContent = "Correct!"
    }
    else
    {
        output.textContent = "Incorrect!"
    }
    var message = new SpeechSynthesisUtterance(output.textContent);
    synth.speak(message);
});
btnAns3.addEventListener("click", ()=>
{
    if (is_correct(2))
    {
        output.textContent = "Correct!"
    }
    else
    {
        output.textContent = "Incorrect!"
    }
    var message = new SpeechSynthesisUtterance(output.textContent);
    synth.speak(message);
});

var btnRead = document.querySelector("#btnRead");
btnRead.addEventListener("click", ()=>
{
    var message = new SpeechSynthesisUtterance(document.getElementById("word-problem").textContent.split("\n")[0]);
    synth.speak(message);
});
