let today = new Date();
let year = today.getFullYear();

const copy = document.getElementById("copyright");
copy.innerHTML = "<p> Sara Bento de Castro &copy; " + year + " All rights reserved</p>";



const details = [{
    type: "foillard",
    name: "bege-square",
    source: "app/images/eco-bones1x.png",
    material: '100% Silk Twill',
    size: '160cm x 38cm',
    production: 'Portugal'
  },
  {
    type: "foillard",
    name: "green-square",
    sourceDetail: "geom-pattern.jpg",
    material: '100% Silk Twil',
    size: '160cm x 38cm',
    production: 'Portugal'
  },
  ,
  { type: "echarpe",
    name: "bege-rect",
    source: "app/images/model_green_sq1x.jpg",
    material: '100% Silk Twil',
    size: '160cm x 38cm',
    production: 'Portugal'
  },
   { type: "echarpe",
    name: "navy-rect",
    sourceDetail: "Detail-Echarpe-Narciso-e-Eco-ret-navy_1x",
    sourceDetail2: "Detail-Echarpe-Narciso-e-Eco-ret-navy_2x",
    sourceModel: "Model-Echarpe-Narciso-e-Eco-ret-navy_1x",
    sourceModel2: "Model-Echarpe-Narciso-e-Eco-ret-navy_2x",
    sourceProduct: "Echarpe-Narciso-e-Eco-ret-navy_1x",
    sourceProduct2: "Echarpe-Narciso-e-Eco-ret-navy_2x",
    material: '100% Silk Twil',
    size: '160cm x 38cm',
    production: 'Portugal'
  }

];



const panels = document.querySelectorAll(".panel");

const echarpe = document.getElementById('echarpe');
const foillard = document.getElementById('foillard');
const cardContent = document.getElementById('card-content');

const headingsTwos = document.querySelectorAll("h2");

const cardWraps = document.querySelectorAll(".cardwrap");

const cards = document.querySelectorAll(".card");


function toggleOpen(e) {

  e.preventDefault();
  emptyDetail();

  let typeEl = e.target.getAttribute("data-type");

  
   

 


  for (let detail in details) {





    if (e.target.id === details[detail].name) {


      wTile = event.target.parentNode;
       parentwTile = wTile.parentNode;
       parentwTile.classList.add("border");


      const detailPics = document.createElement("div");
     
      detailPics.innerHTML = ` 
    
<div class="detail-container">
   <div class="caption-wrapper">
       <div class="caption">
            <p> Material: ${details[detail].material} </p>
            <p> Size: ${details[detail].size} </p>
            <p> Digitally printed in the Netherlands and sewn in ${details[detail].production}</p>
        </div>
   </div> 

   <div class="details">


      <div class="detail"> 
       <picture class=" detail-images">
            <img class="img-detail-product" src="app/images/new/${details[detail].sourceDetail}.jpg" srcset="app/images/new/${details[detail].sourceDetail2}.jpg 2x, app/images/new/${details[detail].sourceDetail}.jpg 1x" alt="narciso eco scarf rectangular">
      </picture>
      </div>
  
      <div class="detail"> 
        <picture class="detail-images">
           <img class="img-model-product" src="app/images/new/${details[detail].sourceModel}.jpg" srcset="app/images/new/${details[detail].sourceModel2}.jpg 2x, app/images/new/${details[detail].sourceModel}.jpg 1x" alt="narciso eco scarf rectangular">
       </picture>
      </div>

       <div class="detail"> 
       <picture class="detail-images">
              <img class="img-echarpe-product" src="app/images/new/${details[detail].sourceProduct}.jpg" srcset="app/images/new/${details[detail].sourceProduct2}.jpg 2x, app/images/new/${details[detail].sourceProduct}.jpg 1x" alt="narciso eco scarf rectangular">
       </picture>
       </div>
    
    </div>
   </div> `




      if ((typeEl === details[detail].type) ){
        console.log("yo");
        let sectionToAppend = document.getElementById(typeEl);
        console.log(typeEl, sectionToAppend);
        sectionToAppend.appendChild(detailPics);
        sectionToAppend.scrollIntoView({block: "nearest"});

      }


    }

  }
}





function lightsOn(e){
  console.log("on");
  for (let panel in panels) {

      let hoverEl = e.target.getAttribute("data-type");
      let hoverElTarget = e.target;

      if (hoverEl === panels[panel].id) {
        console.log("hello" + panels[panel].id);

        let panelo = document.getElementById(panels[panel].id)
        panelo.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(app/images/${panels[panel].id}.jpg)`;
        panelo.style.backgroundSize = "30%";

        hoverElTarget.classList.toggle("heartbeat");

      }

    }

}

function lightsOff(e){
  console.log("off");
  for (let panel in panels) {

      let hoverEl = e.target.getAttribute("data-type");
      let hoverElTarget = e.target;

      if (hoverEl === panels[panel].id) {
        console.log("goodbye" + panels[panel].id);
        let panelo = document.getElementById(panels[panel].id)
        panelo.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(app/images/${panels[panel].id}.jpg) `;
        panelo.style.backgroundSize = "60%";

        hoverElTarget.classList.toggle("heartbeat");

      }

    }

}


function emptyDetail(){

  echarpe.innerHTML = '';
  foillard.innerHTML = '';

  cardWraps.forEach(cardWrap => cardWrap.classList.remove("border"));
}


headingsTwos.forEach(headingTwo => headingTwo.addEventListener("mouseover", lightsOn, false));
headingsTwos.forEach(headingTwo => headingTwo.addEventListener("mouseout", lightsOff, false));
cards.forEach(card => card.addEventListener('click',toggleOpen, false));




