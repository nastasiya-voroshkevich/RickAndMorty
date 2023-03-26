import { sub } from "..";
import { Popup } from "./popup";


export function Card(el) {
  el.forEach(i => {
    let divImg = document.createElement("div");
    divImg.classList.add("card");
    sub.append(divImg);
    let tmpIMG = new Image();
    let img = document.createElement("img");
    img.className = "card-img";
    tmpIMG.src = i.image;
    tmpIMG.onload = () => {
      img.src = tmpIMG.src;
    };

    divImg.append(img);
    let pIn = document.createElement("p");
    pIn.classList.add("answer-number");
    pIn.innerText = `${i.name}`;
    divImg.append(pIn);
    divImg.addEventListener('click', function () {
      Popup(i)

    })
  })

}