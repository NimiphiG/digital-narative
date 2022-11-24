

//arryays and totals
let clouds = []
let cloudsBusted = []
let cloudsBuilt = []
let muds = []
let mudsDug = []
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
  document.getElementById('machine-whole').style.zIndex = 1
  document.getElementById('ground').style.zIndex = 1
  document.getElementById('muddyground').style.zIndex = 1
  document.getElementById('car').style.zIndex = 1
  document.getElementById('dad').style.zIndex = 1
  document.getElementById('boy').style.zIndex = 0
  document.getElementById('stage-1-text').style.zIndex = 1
  document.getElementById('stage-2-text').style.zIndex = 1
  document.getElementById('stage-3-text').style.zIndex = 1
  document.getElementById('stage-4-text').style.zIndex = 1
  document.getElementById('stage-5-text').style.zIndex = 1
  document.getElementById('encoragement').style.zIndex = 1


  document.body.style.overflow = 'visible'

}



//rotate machine with mouse move both x and y
window.addEventListener("mousemove", mousemove,)

function mousemove(e) {

  const machine = document.querySelector("#machine")


  var b = ((e.x) - 2200) //machine-whole left
  var a = ((e.y) - 670)  // machine-whole top
  var rad = Math.atan2(a, b)
  var rot = (rad * (180 / Math.PI) * -1) + 180

  machine.style.rotate = -rot - 35 + "deg";
}



//generate clouds on load 
window.onload = generateCloud(), generateMud()
function generateCloud() {
  for (let i = currentCloudTotal; i <= 100; i++) {


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
  for (let i = currentMudTotal; i <= 60; i++) {

    let newElement = document.createElement('div');

    let randomX = Math.floor(Math.random() * 350);
    let randomY = Math.floor(Math.random() * 250);
    let randomR = Math.floor(Math.random() * 360) + 'deg';



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
    }
  })


// create cloud on click
function createcloud(event) {

  let newElement = document.createElement('div');
  clouds.push(newElement)
cloudsBuilt.push(newElement)
  let cloudIndex = clouds.indexOf(newElement)
  newElement.className = "cloud"
  newElement.id = cloudIndex      //number the clouds
  newElement.style.left = (event.clientX - 25) + "px"
  newElement.style.top = (event.clientY - 15) + "px"

  let cloud = document.getElementById("sky").appendChild(newElement)

  cloud.addEventListener('click', bustcloud,)
// start encoragement stage
if (cloudsBuilt.length >= 1) {
  document.getElementById('stage-2-text').classList.add('fade-out')
  // document.getElementById('stage-2-text').classList.add('fade-in')
  console.log('encoragement')
}
}

//remove specific cloud and add raindrop
function bustcloud(event) {
  let cloud = clouds.splice((event.target.id - 1), 1)

  if (cloud != null) {
    document.getElementById("sky").removeChild(event.target)
  }
  console.log('make rain')
  let newElement = document.createElement('div');
  cloudsBusted.push(newElement)

  newElement.className = 'rain fall'
  newElement.style.left = (event.clientX - 15) + "px"
  newElement.style.top = (event.clientY - 15) + "px"

  document.getElementById('sky').appendChild(newElement)
  console.log(newElement)
  console.log(cloudsBusted)
  console.log('clouds busted=' + cloudsBusted.length)

  //start second  stage
  if (cloudsBusted.length == 4) {
   
    document.getElementById('stage-1-text').classList.add('fade-out')
    
    console.log('stage 2')
  }

  
  //move to thrird stage
  if (cloudsBusted.length == 10 && cloudsBuilt.length >= 1) {
    console.log('stage 3') 
    document.getElementById('car').classList.add('fade-in')
 
    document.getElementById('encoragement').classList.add('fade-out')
  }
  
  //move to fourth stage
  if (cloudsBusted.length == 11 && cloudsBuilt.length >= 1) {
    console.log('stage 4')
    document.getElementById('stage-3-text').classList.add('fade-out')
    document.getElementById('dad').classList.add('move-to-car')
  }
  //move to fifth stage
  if (cloudsBusted.length == 12 && cloudsBuilt.length >= 1) {
    console.log('stage 5')
    document.getElementById('stage-4-text').classList.add('fade-out')
    document.getElementById('dad').classList.remove('move-to-car')
    document.getElementById('dad').classList.add('fade-out-dad')
  }
   //move to sixth stage
   if (cloudsBusted.length == 13 && cloudsBuilt.length >= 1) {
    console.log('stage 6')
    document.getElementById('stage-5-text').classList.add('fade-out')
    document.getElementById('car').classList.remove('fade-in')
    document.getElementById('car').classList.add('fade-out')
  }

}

//remove specific mud 
function bustmud(event) {
  let mud = muds.splice((event.target.id - 1), 1)
  mudsDug.push('dug')
  if (mud != null) {
    document.getElementById("muddyground").removeChild(event.target)
  }
  if (mudsDug.length > 5) {
    console.log('Radiation Overdose')
    document.body.style.cursor = 'green'
  }
}



//when all clouds are gone do thing 




