

//arryay of clouds
let clouds = []

let currentCloudTotal = 0

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

}

//on scroll

//rotate machine with mouse move both x and y
window.addEventListener("mousemove", mousemove)

 function mousemove(e) {
  
  const machine = document.querySelector("#machine")

  var b = ((e.x) - 1050)
  var a = ((e.y) - 850)
  var rad = Math.atan2(a, b)
  var rot = (rad * (180 / Math.PI) * -1) + 180

  machine.style.rotate = -rot - 45 + "deg";

}

//generate clouds on load not working
window.onload = generateCloud()
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



//when all clouds are gone do thing 

while (clouds.length === 0) {

}




// remove first cloud from array
// function cloudbust() {
//   let cloud = clouds.shift()

//   if (cloud != null) {
//     document.getElementById("sky").removeChild(cloud)
//   }
// }


// ROTATIOON ATTEMPTS

// rotate on just x mouse
// machine.style.rotate = ((((e.x) / visualViewport.width) * 180) - 45) + "deg";

// let barrel = document.getElementById("barrel");
// window.addEventListener('mousemove', (e) => {
// let x = e.clientX *100 / window.innerWidth - 50;
// let y = e.clientY *100 / window.innerHeight - 50;
// console.log(e.clientX);
// barrel.style.left = x + "%";
// barrel.style.top = y + "%";
// })

// $(".move-area").mousemove(function(event) {
//   var machine = $("machine");
//   console.log('machine', machine)
//   var x = (machine.offset().left) + (machine.width() / 2);
//   var y = (machine.offset().top) + (machine.height() / 2);
//   var rad = Math.atan2(event.pageX - x, event.pageY - y);
//   var rot = (rad * (180 / Math.PI) * -1) + 180;
//   machine.css({
//     '-webkit-transform': 'rotate(' + rot + 'deg)',
//     '-moz-transform': 'rotate(' + rot + 'deg)',
//     '-ms-transform': 'rotate(' + rot + 'deg)',
//     'transform': 'rotate(' + rot + 'deg)'
//   });
// });

// document.querySelector("body").addEventListener("mousemove",mechanism)
// function mechanism(){
//   const machine = document.getElementById("machine");
//   machine.foreach(function(machine){
//   let x = (machine.getBoundingClientRect().left) + (machine.clientWidth/2);
//   let y = (machine.getBoundingClientRect().top) + (machine.clientWidth/2);
//   let radian = math.atan2(event.pageX - x, (event.pageY - y ));
//   let rotation = (radian*(180/math.pi) * -1)+270;
//   machine.style.transform = "rotate("+rotation+"deg)"
// }
