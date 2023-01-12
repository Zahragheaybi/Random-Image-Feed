const container = document.querySelector(".container");
const picsumUrl = "https://picsum.photos";
const rows = 10;

for (let index = 0; index < rows * 4; index++) {
  const url = `${picsumUrl}/${getRandomSize()}`;
  const el = document.createElement("div");
  el.classList.add("img-container");
  el.innerHTML = `<img src="${url}">`;
  container.appendChild(el);
}

function getRandomSize() {
  return Math.floor(Math.random() * 10) + 200;
}
