


let today = new Date();
let year = today.getFullYear();

const copy = document.getElementById("copyright");
copy.innerHTML = "<p> Sara Bento de Castro &copy; " + year + " All rights reserved</p>";



const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll("img");
const picContainer = document.querySelectorAll(".thumbnail");


function toggleOpen (){
  this.classList.toggle('open');
  console.log(images);
}

function toggleBig (){



}


function toggleActive (e){
  console.log(e.propertyName)
  if (e.propertyName.includes('flex'))
  {
    this.classList.toggle('open-active');
  }
}

// cards.forEach(card => card.addEventListener('click',toggleOpen));
images.forEach(image => image.addEventListener('click',toggleBig));
// panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
