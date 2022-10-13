const buildList = document.querySelector(".buildList");
const mainView = document.querySelector(".mainView");
const nameOfBuild = document.querySelector(".nameOfBuild");

let verification;
let cardSelect = [];
export let dataJSON;
let volumeMuted = true;
let position = 0;
let i = 0;
import { popup } from "./timer.js";
import { secondDisplay } from "./timer.js";
import data from "../buildOrder.json";

export let ms;

const nbElementInObj = (obj) => {
  let cpt = 0;
  for (let str in obj) {
    if (obj.hasOwnProperty(str)) {
      ++cpt;
    }
  }
  return cpt;
};

const afficherRace = () => {
  try {
    buildList.innerHTML = "";

    for (let key in dataJSON) {
      buildList.innerHTML += `<div id="${key}" class="card"><p>${key}</p></div>`;
    }

    const card = document.querySelectorAll(".card");

    card.forEach((e) => {
      e.addEventListener("click", (e) => {
        for (let i = 0; i < nbElementInObj(dataJSON); i++) {
          if (e.target.parentElement.id != "") {
            verification = e.target.parentElement.id;
          }

          if (e.target.id != "") {
            verification = e.target.id;
          }

          if (verification == Object.keys(dataJSON)[i]) {
            buildList.innerHTML = "";
            for (let key in Object.values(dataJSON)[i]) {
              buildList.innerHTML += `<div id="${verification}" class="cardBuild"><p>${key}</p></div>`;
            }
            let toto;
            const cardBuild = document.querySelectorAll(".cardBuild");
            cardBuild.forEach((e) => {
              e.addEventListener("click", (e) => {
                // console.log(Object.values(dataJSON)[i][e.target.innerText]);
                ms = Object.values(dataJSON)[i][e.target.innerText];
                mainView.innerHTML = `<div class="card-name-bo">
                                                <h1 style="margin-bottom:20px">${
                                                  Object.values(dataJSON)[i][
                                                    e.target.innerText
                                                  ].name
                                                }</h1>
                                              </div>
                                            `;
                mainView.innerHTML += `
                          <h2 style="margin-bottom:20px">Description:<p style="font-size:1rem;color:grey">${
                            Object.values(dataJSON)[i][e.target.innerText]
                              .Description
                          }</p></h2>
                        `;

                mainView.innerHTML += `
                        <h2 style="margin-bottom:20px">Build order:</h2>
                      `;

                mainView.innerHTML += `
                          <table>
                            <thead id="test">
                              <tr style="font-size:1.5rem">
                                <th scope="col">Population</th>
                                <th scope="col">Temps</th>
                                <th scope="col">Description</th>
                                <th scope="col">Indication</th>
                              </tr>
                            </thead>
                          </table>
                          `;
                const inject = document.getElementById("test");

                for (
                  let k = 0;
                  k < Object.values(dataJSON)[i][e.target.innerText].bo.length;
                  k++
                ) {
                  inject.innerHTML += `<tr  style="color:grey">
                                                  <th style="padding: 5px 20px" scope="col">${
                                                    Object.values(dataJSON)[i][
                                                      e.target.innerText
                                                    ].bo[k][0]
                                                  }</th>
                                                  <th style="padding: 5px 20px" scope="col">${secondDisplay(
                                                    Object.values(dataJSON)[i][
                                                      e.target.innerText
                                                    ].bo[k][1]
                                                  )}</th>
                                                  <th style="padding: 5px 20px;text-align:left" scope="col">${
                                                    Object.values(dataJSON)[i][
                                                      e.target.innerText
                                                    ].bo[k][2]
                                                  }</th>
                                                  <th style="padding: 5px 20px"scope="col">${
                                                    Object.values(dataJSON)[i][
                                                      e.target.innerText
                                                    ].bo[k][3]
                                                  }</th>
                                                </tr>`;
                }
              });
            });
            return;
          }
        }
      });
    });
  } catch (error) {
    console.log("ERR : Affichage des races" + error);
  }
};

dataJSON = data;
afficherRace();

menu.addEventListener("click", () => {
  console.log("BTN menu");
  afficherRace();
});

prev.addEventListener("click", () => {
  console.log("BTN prev");
});

next.addEventListener("click", () => {
  console.log("BTN next");
});
