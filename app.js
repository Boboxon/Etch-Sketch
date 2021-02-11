const color = document.getElementById("color");

const erase = document.getElementById("erase");

const clear = document
  .getElementById("clear")
  .addEventListener("click", clearSketch);
const size = document
  .getElementById("size")
  .addEventListener("click", sizeChange);
const sketch = document.getElementById("sketch");

//using promt to change the size of box
function sizeChange() {
  let sizeSellection = prompt(
    "How many squares do you want in the next game?",
    "20"
  );
  createRows(sizeSellection);
}

//main function
function createRows(number = 16) {
  sketch.innerHTML = "";
  sketch.style.cssText = `grid-template-columns: repeat(${number}, 1fr);
  grid-template-rows: repeat(${number}, 1fr);`;

  for (let i = 0; i < number * number; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-item");
    sketch.appendChild(box);
    //adding event listener to the box
    box.addEventListener("mouseenter", selectColor);
    box.setAttribute("style", "border: 1px solid black");
  }
}
//selecting color
function selectColor(e) {
  let chooseColor = color.value;
  e.target.style.backgroundColor = chooseColor;
}

//clear the sktech
function clearSketch() {
  sketch.innerHTML = "";
}
