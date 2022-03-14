console.log("it's working fine");
let text =
  "Home In wise times we accuse pleasure, for we accuse life's pain and pain by toil, and it despises the duties of our very self, no one is bound to welcome his chosen pleasures, he wants the main things! They abandon, choose, follow, escape, blinded, catch him, encounter a maze, hate him, and escape? We blame him for the consequences or the pleasure to follow, he takes it, makes the toughest choices, we can avoid the pain, he is bound to the pain.";

const textInput = document.getElementById("input");
textInput.focus();
const arrayOfText = text.split(" ");
let textArea = document.querySelector(".changeable");

for (let allWords = 0; allWords <= text.length; allWords++) {
  let a = text.charAt(allWords);
  let allDetail = (textArea.innerHTML = arrayOfText.join(" "));
}

let words = 0;
let wrongWords = 0;

// time over page functions
const scorePage = document.querySelector(".aboveScreenPage");
const timeBox = document.getElementById("time");
let time = 0;
let firstLetter = text.split(" ");

/*
 Formulas are below

 Gross WPM below
  let A = All words / 5
  let B = A/Time


  Net WPM below

  Let c = B - Errors








 WPM => All typed words / 5 = answer
 cal => answer / Time = Answer
 Net WPM => Answer - Error
 Accuracy => (Net WPM / WPM)*100 = Ans %



 formula as a technical form of below

 let a = allTyped words/ 5
 let b = a/time
 let c = b - wrongWords
 let d = (c/a)*100

 let Final = d%


*/

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    if (arrayOfText[0] == textInput.value) {
      // display text remover function
      arrayOfText.shift();
      setInterval(() => {
        let allDetail = (textArea.innerHTML = arrayOfText.join(" "));
      }, 0.3);

      // input text remover function
      setTimeout(() => {
        document.querySelector(".input").value = null;
      }, 0.0001);

      // word counter
      words++;
      console.log(`this word number is ${words}`);
    } else {
      // Wrong words counter function below
      wrongWords++;
      console.log(`this is ${wrongWords} wrong word`);
      setTimeout(() => {
        document.querySelector(".input").value = null;
      }, 0.0001);
    }

    // Time counter function below
    if (firstLetter[0] == input.value) {
      firstLetter.shift();
      firstLetter.unshift(
        "dfjalsdkfjaslkdfjasldkfaslkdfjalsdfkjalskdfjaslkfdjaslkdfjaslkdjfaslkdjfaslkdjfaslkdfjasl;"
      );
      setInterval(() => {
        time++;
        timeBox.innerHTML = time;
        if (time == 60) {
          scorePage.style.display = "flex";
          time = 0;
        }
      }, 1000);
    }

    // All words counter checker function below

    for (let allWords = 0; allWords <= firstLetter.length; allWords++) {
      let step1 = words / 5;
      let wPM = Math.round(step1 / 0.5);

      document.getElementById("accuracy1d").innerHTML = wPM;
    }

    // console.log(time);
    // Time counter function END
  }
});
