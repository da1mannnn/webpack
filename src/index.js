// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";

import baseElement from "./templateElement/base_element.hbs";

import { base, list, frameworks, libs } from "./data/hbsData";

const baseMarkUp = baseElement(base);

console.log(baseMarkUp);

const root = document.querySelector("#root");
root.insertAdjacentHTML("beforeend", baseMarkUp);
import listElement from "./templateElement/list.hbs";
const listMarkUp = listElement(list);
console.log(listMarkUp);
root.insertAdjacentHTML("beforeend", listMarkUp);


import frameworksElement from "./templateElement/frameworks.hbs";
const frameMarkUp = frameworksElement(frameworks);
console.log(frameMarkUp);
root.insertAdjacentHTML('beforeend', frameMarkUp);


import libsElement from './templateElement/libs.hbs';
const libsMarkUp = libsElement(libs);
root.insertAdjacentHTML('beforeend', libsMarkUp);