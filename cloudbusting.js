

//arryay of clouds
let clouds = []
let muds = []
let currentCloudTotal = 0
let currentMudTotal = 0



//move through window on click
document.getElementById('window1').addEventListener('mouseup', addmovethrough, generateCloud)
function addmovethrough() {

  document.getElementById("window1").classList.add("move-through");
  document.getElementById("room").classList.add("move-through");
  document.getElementById('window1').removeEventListener('click', addmovethrough)
}
document.getElementById('window1').addEventListener('animationend', shiftZ)
function shiftZ() {
  document.getElementById('sky').style.zIndex = 1
  document.getElementById('machine').style.zIndex = 1
  document.getElementById('hills').style.zIndex = 1
  document.getElementById('key').style.zIndex = 1
  document.getElementById('ground').style.zIndex = 1
  document.getElementById('muddyground').style.zIndex = 1
  document.body.style.overflow = 'visible'

}



//rotate machine with mouse move both x and y
window.addEventListener("mousemove", mousemove)

function mousemove(e) {

  const machine = document.querySelector("#machine")

  var b = ((e.x) - 1350)
  var a = ((e.y) - 750)
  var rad = Math.atan2(a, b)
  var rot = (rad * (180 / Math.PI) * -1) + 180

  machine.style.rotate = -rot - 45 + "deg";
}

//generate clouds on load 
window.onload = generateCloud(),generateMud()
function generateCloud() {
  for (let i = currentCloudTotal; i <= 20; i++) {


    let newElement = document.createElement('div');

    let randomX = Math.floor(Math.random() * visualViewport.width);
    let randomY = Math.floor(Math.random() * ((visualViewport.height / 100) * 50));

    clouds.push(newElement)
    let cloudIndex = clouds.indexOf(newElement)
    newElement.className = "cloud"
    newElement.id = cloudIndex      //number the clouds
    newElement.style.left = (randomX) + "px";
    newElement.style.top = (randomY) + "px";

    let cloud = document.getElementById("sky").appendChild(newElement)
    cloud.addEventListener('click', bustcloud);

  }
}
//generate mud on load 

function generateMud() {
  for (let i = currentMudTotal; i <= 50; i++) {

    let newElement = document.createElement('div');

    let randomX = Math.floor(Math.random() * 350);
    let randomY = Math.floor(Math.random() * 250);
    let randomR = Math.floor(Math.random() * 360)+'deg';

   

    muds.push(newElement)
    let mudIndex = muds.indexOf(newElement)
    newElement.className = "mud"
    newElement.id = mudIndex    
    newElement.style.left = (randomX) + "px";
    newElement.style.top = (randomY) + "px";
 newElement.style.rotate = randomR
 newElement.textContent = 'Dig?'

    let mud = document.getElementById("muddyground").appendChild(newElement)
    mud.addEventListener('click', bustmud);

  }
}



// mouse function
document.getElementById('sky').addEventListener('mousedown',
  function cloudMechanics(event) {
    if (event.ctrlKey) {
      console.log('add cloud')
      createcloud(event)

    } else {
      console.log('cloudbusted')
      // cloudbust()
    }
  })


// create cloud on click
function createcloud(event) {

  let newElement = document.createElement('div');

  let cloudIndex = clouds.indexOf(newElement)
  newElement.className = "cloud"
  newElement.id = cloudIndex      //number the clouds
  newElement.style.left = (event.clientX - 25) + "px"
  newElement.style.top = (event.clientY - 15) + "px"

  let cloud = document.getElementById("sky").appendChild(newElement)

  cloud.addEventListener('click', bustcloud,)
}

//remove specific cloud and add raindrop
function bustcloud(event) {
  let cloud = clouds.splice((event.target.id - 1), 1)

  if (cloud != null) {
    document.getElementById("sky").removeChild(event.target)
  }
  console.log('make rain')
  let newElement = document.createElement('div');
  newElement.className = 'rain fall'
  newElement.style.left = (event.clientX - 15) + "px"
  newElement.style.top = (event.clientY - 15) + "px"
  document.getElementById('sky').appendChild(newElement)
  document.getElementsByClassName('fall').style.animation = 'fall' + time + 's' + 'linear'
}

//remove specific mud 
function bustmud(event) {
  let mud = muds.splice((event.target.id - 1), 1)

  if (mud != null) {
    document.getElementById("muddyground").removeChild(event.target)
  }
  
}



//when all clouds are gone do thing 

while (clouds.length === 0) {

}




