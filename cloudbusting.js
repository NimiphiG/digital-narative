

//arryay of clouds
let clouds = []

let currentCloudTotal = 0
let sky = document.getElementById('sky')

//move through window on click
function addmovethrough() {
  document.getElementById("window1").classList.add("move-through");
  document.getElementById("room").classList.add("move-through");
}


//rotate machine with mouse move both x and y
window.addEventListener("mousemove", function mousemove(e) {
  const machine = document.querySelector("#machine")

  var b = ((e.x) - 1050)
  var a = ((e.y) - 850)
  var rad = Math.atan2(a, b)
  var rot = (rad * (180 / Math.PI) * -1) + 180

  machine.style.rotate = -rot - 45 + "deg";



})



//generate clouds on load not working
function generateCloud() {
  let newElement = document.createElement('div');

  newElement.className = "cloud"
  newElement.id = "cloud" + currentCloudTotal
  newElement.style.left = (randomX) + "px"
  newElement.style.top = (randomY) + "px"
  clouds.push(newElement)
  document.getElementById("sky").appendChild(newElement)

  console.log('random run')
  console.log(randomX)

  let randomX = getrandomx()
  function getrandomx() {
    Math.floor(Math.random() * 1000)
  }

}


// mouse function
window.addEventListener('mousedown',
  function cloudMechanics(event) {
    if (event.ctrlKey) {
      console.log('add cloud')
      createcloud(event)

    } else {
      console.log('cloudbusted')
      cloudbust()
    }
  })

// create cloud on click
function createcloud(event) {
  let newElement = document.createElement('div');

  newElement.className = "cloud"
  newElement.id = "cloud" + currentCloudTotal       //number the clouds?
  newElement.style.left = (event.clientX - 25) + "px"
  newElement.style.top = (event.clientY - 15) + "px"

  clouds.push(newElement)

  document.getElementById("sky").appendChild(newElement)
}

// remove first cloud from array
function cloudbust() {
  let cloud = clouds.shift()
  console.log(cloud)
  if (cloud != null) {
    document.getElementById("sky").removeChild(cloud)
  }
}









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
