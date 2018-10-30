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



const headings = document.getElementsByTagName("h2");
const panels = document.querySelectorAll(".panel");
const foillard = document.getElementById('foillards')
const images = document.querySelectorAll("img");
const picContainer = document.querySelectorAll(".thumbnail");


function toggleOpen(e) {

  foillard.innerHTML = '';
  e.preventDefault();
  console.log(e.target.id);
  for (let detail in details) {

    if (e.target.id === details[detail].name) {
      const div = document.createElement("div");
      div.className = "product-detail";
      div.id = "product-detail";
      const divDetail = document.getElementById('product-detail');
      console.log(divDetail)
      div.innerHTML = `<h3>${details[detail].name}</h3><img class="detail-image" src="${details[detail].source}">`


      foillard.appendChild(div);

    }

  }
}





for (let i in headings) {

  headings[i].onmouseover = function(e) {
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

  headings[i].onmouseout = function(e) {
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

}
