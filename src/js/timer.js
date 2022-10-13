const departMinutes = 0;
let temps = departMinutes * 60;
const timerElement = document.getElementById("timer");

import { ms } from "./index.js";

let intervalID,
  isStart = false,
  secondBis = 0,
  minutes,
  secondes,
  nbSpeak = 0,
  second = 1;

const ring = (key) => {
  const audio = new Audio();
  audio.src = "../Assets/Audio/" + key + ".mp3";
  audio.play();
};

export function secondDisplay(nombreDeSeconde) {
  let NBminute, NBseconde;

  NBminute = parseInt(nombreDeSeconde / 60, 10);
  NBseconde = parseInt(nombreDeSeconde % 60, 10);

  NBminute = NBminute < 10 ? "0" + NBminute : NBminute;
  NBseconde = NBseconde < 10 ? "0" + NBseconde : NBseconde;

  return `${NBminute}:${NBseconde}`;
}

const action_ival = function () {
  timerAnnonce.innerHTML = `${ms.bo[nbSpeak][1] - secondBis} s`;
  if (ms.bo[nbSpeak][1] == secondBis) {
    console.log("play song");
    nbSpeak++;
    ring(nbSpeak);
  }
  console.log(second);

  minutes = parseInt(second / 60, 10);
  secondes = parseInt(second % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;
  temps++;
  second++;
  secondBis++;
};

const chrono = function (act) {
  if (act === "start") {
    intervalID = window.setInterval(action_ival, 1000);
    timer.style.color = "#3FA";
  } else {
    timer.style.color = "#c2c2c2";
    window.clearInterval(intervalID);
    console.log(`pause`);
  }
};

export function popup(state, message, yes, no) {
  if (state == true) {
    document.querySelector(".popupMaster").style.visibility = "visible";
  } else {
    document.querySelector(".popupMaster").style.visibility = "hidden";
  }
  document.querySelector(".popupMaster h1").innerHTML = `${message}`;
  document.querySelector(".btnYes").value = `${yes}`;
  document.querySelector(".btnNo").value = `${no}`;
}

btnPlay.addEventListener("click", function () {
  console.log("btn play");
  if (isStart === false) {
    isStart = true;
    chrono("start");
  }
  // if (ms == null) {
  //   popup(
  //     true,
  //     "Vous devez choisir un build order avant de pouvoir l'écouter",
  //     "yes",
  //     "no"
  //   );
  // } else {
  //   if (isStart === false) {
  //     isStart = true;
  //     chrono("start");
  //   }
  // }
});

btnPause.addEventListener("click", function () {
  if (isStart === true) {
    isStart = false;
    chrono("end");
  }
});

btnReset.addEventListener("click", function () {
  minutes = "00";
  secondes = "00";
  second = 1;
  timerElement.innerText = `${minutes}:${secondes}`;
});
