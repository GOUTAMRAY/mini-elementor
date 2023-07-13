
const heading = document.querySelector("#heading");

const align = document.querySelectorAll(".align");

const font_size = document.querySelector("#font_size");
const font_family = document.querySelector(".font_family");

const color = document.querySelector("#color");

const h1 = document.querySelector("h1");





// create click design 

heading.onkeyup = () => {
    h1.innerHTML = heading.value;
    h1.style.fontSize = "20px";
};

align.forEach((item) => {
  item.onchange =()=>{
     h1.style.textAlign = item.value;
  }
})


font_size.oninput = () => {
  h1.style.fontSize = font_size.value + "px";
};


color.oninput = () => {
  h1.style.color = color.value;
};

font_family.onchange = () => {
  h1.style.fontFamily = font_family.value;
};




