import "./scss/style.scss"
import { Card } from "./lib/card";

const subHeader = document.createElement('h2');
export const sub = document.querySelector('.wrapp');
const arrApi = [];

fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then((response) => response.json())
  .then((users) => {
    Card(users.results)
  });

for (let i = 2; i <= 42; i++) {
  arrApi.push(`https://rickandmortyapi.com/api/character/?page=${i}`)
}



function throttle(callee, timeout) {
  let timer = null

  return function perform(...args) {
    if (timer) return

    timer = setTimeout(() => {
      callee(...args)

      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}


async function checkPosition() {
  const height = document.body.offsetHeight
  const screenHeight = window.innerHeight
  const scrolled = window.scrollY

  const threshold = height - screenHeight / 4
  const position = scrolled + screenHeight

  if (position >= threshold) {
    fetch(`${arrApi[0]}`)
      .then((response) => response.json())
      .then((users) => {
        Card(users.results)

      });
    arrApi.shift()
  }

}


(() => {
  window.addEventListener('scroll', throttle(checkPosition))
  window.addEventListener('resize', throttle(checkPosition))
})()


