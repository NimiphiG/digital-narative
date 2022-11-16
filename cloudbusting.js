

//move through window on click
function addmovethrough() {
  document.getElementById("window1").classList.add("move-through");
  document.getElementById("room").classList.add("move-through");
}


//rotate machine with mouse move
window.addEventListener("mousemove", function (e) {
  const machine = document.querySelector("#machine")
  machine.style.rotate = ((((e.x) / screen.width) * 180) - 45) + "deg";

})



// create clouds on click
window.addEventListener('click', function () {

  let newElement = document.createElement('div');
  newElement.className = "cloud"
  document.getElementById("sky").appendChild(newElement)

})





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

// })
// }
