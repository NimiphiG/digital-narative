

//arryay of clouds
let clouds = []
let currentCloudTotal = 0

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




// function printmousepos(){
//   window.addEventListener("mousemove", function mousemove(e) {
//     var currentx = e.x
//     var currenty = e.y
//     console.log(currentx, currenty)
// })}



// create clouds on click position
window.addEventListener('mousedown',
  function cloudMechanics(event) {
    if (event.ctrlKey) {
      console.log('cloudbusted')
      cloudbust()
    } else {
      console.log('add cloud')
      createcloud(event)
    }
  })

function createcloud(event) {
  let newElement = document.createElement('div');

  newElement.className = "cloud"
  newElement.id = "cloud" + currentCloudTotal       //number the clouds?
  newElement.style.left = (event.clientX - 25) + "px"
  newElement.style.top = (event.clientY - 15) + "px"

  clouds.push(newElement)

  document.getElementById("sky").appendChild(newElement)

}

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
