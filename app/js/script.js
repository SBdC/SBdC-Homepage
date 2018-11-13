let today = new Date();
let year = today.getFullYear();

const copy = document.getElementById("copyright");
copy.innerHTML = "<p> Sara Bento de Castro &copy; " + year + " All rights reserved</p>";


const panels = document.querySelectorAll(".panel");
const colBox = document.getElementById('col-box');
const headingsTwos = document.querySelectorAll(".heartbeat");


function lightsOn(e) {
    console.log("on");
    for (let panel in panels) {

        let hoverEl = e.target.getAttribute("data-type");
        let hoverElTarget = e.target;

        if (hoverEl === panels[panel].id) {
            console.log("hello" + panels[panel].id);

            colBox.style.backgroundColor="transparent";

            let panelo = document.getElementById(panels[panel].id)
            panelo.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(app/images/${panels[panel].id}.jpg)`;
            panelo.style.backgroundSize = "70%";

            hoverElTarget.classList.toggle("heartbeat");

        }

    }

}

function lightsOff(e) {
    console.log("off");
    for (let panel in panels) {

        let hoverEl = e.target.getAttribute("data-type");
        let hoverElTarget = e.target;

        if (hoverEl === panels[panel].id) {
            console.log("goodbye" + panels[panel].id);

            colBox.style.backgroundColor="black";

            let panelo = document.getElementById(panels[panel].id)
            panelo.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(app/images/${panels[panel].id}.jpg) `;
            panelo.style.backgroundSize = "50%";
            console.log("hey")
            hoverElTarget.classList.toggle("heartbeat");

        }

    }

}






headingsTwos.forEach(headingTwo => headingTwo.addEventListener("mouseover", lightsOn, false));
headingsTwos.forEach(headingTwo => headingTwo.addEventListener("mouseout", lightsOff, false));
