


let today = new Date();
let year = today.getFullYear();

const copy = document.getElementById("copyright");
copy.innerHTML = "<p> Sara Bento de Castro &copy; " + year + " All rights reserved</p>";



const details = [{
    name: "bege-square",
    source: "app/images/eco-bones1x.png"
  },
  {
    name: "green-square",
    source: "app/images/geom-pattern.jpg"
  },
  
];


const cards = document.querySelectorAll(".card");
const foillard = document.getElementById('foillards')
const images = document.querySelectorAll("img");
const picContainer = document.querySelectorAll(".thumbnail");


function toggleOpen (e){

  foillard.innerHTML='';
  e.preventDefault();
  console.log(e.target.id);
  for (let detail in details) {

  	if (e.target.id === details[detail].name) {
  	const div = document.createElement("div");
    div.className = "product-detail";
    div.innerHTML = `<h3>${details[detail].name}</h3><img class="detail-image" src="${details[detail].source}">`


  foillard.appendChild(div);
  }
 
  }
}



cards.forEach(card => card.addEventListener('click',toggleOpen, false));

