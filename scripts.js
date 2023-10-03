// 1- Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let link = document.querySelectorAll("a")

link.forEach(element, function listener() {
    console.log(element);
    element.onclick = f();
});
function f(){
  console.log("No pasa nada ja ja")
}

// 2- Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

let images = document.querySelectorAll("img")

function generateRAndomURL() {
  return "./assets/magic-" + Math.floor(getRandomArbitrary(10,6))+"-gif"
}

images.forEach(img, function listener() {
  img.addEventListener(click,function listener() {
    img.src = generateRAndomURL()
  })
})

function generateRAndomURL(){
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i =0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }

return color;

}

let paragraph = document.querySelectorAll("p")

paragraph.forEach("p", function listener(){
  paragraph.addEventListener(click, function listener(){
    p.style.color = generateRAndomColor()
    p.style.backgroundColor = generateRandomColor()
  })
})
