const myColor = document.getElementById('rgb-color');
const myBall = document.getElementsByClassName('ball');
const optionColors = document.getElementById('option-colors');
const answer = document.getElementById('answer');

function generateRandomNumber() {
  return Math.floor(Math.random() * 255).toString(10);
}

function generateRandomColor() {
  let randomColor = '(';
  for (let index = 0; index < 3; index += 1) {
    randomColor += generateRandomNumber();
    if (index < 2) {
      randomColor += ', ';
    }
  }
  randomColor += ')';
  return randomColor;
}

function chosenColor() {
  myColor.innerText = generateRandomColor();
}

function paintBalls() {
  const num = Math.floor(Math.random() * 4);
  for (let index = 0; index < myBall.length; index += 1) {
    let color = 'rgb';
    if (index === num) {
      color += myColor.innerText;
    } else {
      color += generateRandomColor();
    }
    myBall[index].style.backgroundColor = color;
  }
}

function checkColor(object) {
  let color = 'rgb';
  color += myColor.innerText;
  if (color === object.target.style.backgroundColor) {
    return true;
  }
  return false;
}

function colorClick(event) {
  if (event.target.className === 'ball') {
    if (checkColor(event)) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

function selectColorClick() {
  optionColors.addEventListener('click', colorClick);
}

window.onload = function onloadPage() {
  chosenColor();
  paintBalls();
  selectColorClick();
};
