const choices = document.getElementsByClassName("choice");
const choicesPc = document.getElementsByClassName("choice-pc");
let res = document.getElementById("result");

console.log(choices.length);
function playerChoice(picked) {
  let playerChoice = document.getElementById("your-choice");
  picked = playerChoice.value;
  res.textContent = "";
  for (let i = 0; i < choices.length; i++) {
    if (i == picked) {
      choices[i].classList.add("appear");
    } else {
      choices[i].classList.remove("appear");
    }
  }
  return picked;
}

function result() {
  let picked = playerChoice();
  let pcChoice = Math.floor(Math.random() * 3);

  for (let i = 0; i < choices.length; i++) {
    if (i == pcChoice) {
      choicesPc[i].classList.add("appear");
    } else {
      choicesPc[i].classList.remove("appear");
    }
  }
  if (pcChoice == 0) {
    if (picked == 1) {
      res.textContent = "You Win";
    } else {
      res.textContent = "You Lose";
    }
  }
  if (pcChoice == 1) {
    if (picked == 2) {
      res.textContent = "You Win";
    } else {
      res.textContent = "You Lose";
    }
  }
  if (pcChoice == 2) {
    if (picked == 0) {
      res.textContent = "You Win";
    } else {
      res.textContent = "You Lose";
    }
  }

  if (pcChoice == picked) {
    res.textContent = "Tie";
  }
}
