import { sub } from "..";



export function Popup(el) {
  document.querySelector("body").classList.add('no-scroll')
  let div = document.createElement("div");
  div.classList.add("wrapp-modal");

  sub.append(div);
  let addition = document.createElement("div");
  addition.classList.add("fade-block");
  div.append(addition);
  let divMod = document.createElement("div");
  divMod.classList.add("modal-window");
  addition.append(divMod);
  let img = document.createElement("img");
  img.className = "image-modal";
  img.src = el.image;
  divMod.append(img);

  let divWr = document.createElement("div");
  divWr.classList.add("modal-window__wrapp");
  divMod.append(divWr);
  let pN = document.createElement("p");
  pN.innerText = 'Name: ';
  pN.classList.add('title-name');
  divWr.append(pN);
  let p = document.createElement("p");
  p.innerText = el.name;
  divWr.append(p);
  let pLocNam = document.createElement("p");
  pLocNam.innerText = 'Location:';
  pLocNam.classList.add('title-name');
  divWr.append(pLocNam);
  let pLoc = document.createElement("p");
  pLoc.innerText = el.location.name;
  divWr.append(pLoc);
  let pSTNam = document.createElement("p");
  pSTNam.innerText = 'Status:   ';
  pSTNam.classList.add('title-name');
  divWr.append(pSTNam);
  let pST = document.createElement("p");
  pST.innerText = el.status;
  divWr.append(pST);
  let pSPNam = document.createElement("p");
  pSPNam.innerText = 'Species:';
  pSPNam.classList.add('title-name');
  divWr.append(pSPNam);
  let pSP = document.createElement("p");
  pSP.innerText = el.species;
  divWr.append(pSP);
  let pORNam = document.createElement("p");
  pORNam.innerText = 'Origin:';
  pORNam.classList.add('title-name');
  divWr.append(pORNam);
  let pOR = document.createElement("p");
  pOR.innerText = el.origin.name;
  divWr.append(pOR);
  let pGNNam = document.createElement("p");
  pGNNam.innerText = 'Gender:';
  pGNNam.classList.add('title-name');
  divWr.append(pGNNam);
  let pGN = document.createElement("p");
  pGN.innerText = el.gender;

  divWr.append(pGN);

  addition.addEventListener('click', function () {
    document.querySelector("body").classList.remove('no-scroll')
    document.querySelector(".fade-block").remove();
    // document.querySelector(".modal-window").innerHTML = "";
  })

}

