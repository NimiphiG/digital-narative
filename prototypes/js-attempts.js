

//on scroll attempt
window.addEventListener('scroll', findScrollPos)
function findScrollPos(){
if(window.scrollY = 0 ){
 console.log('not scrolled')
 
}else{
  console.log('scrolled')

}}

var scrolled = findScrollPos()

if(scrolled=true){
  console.log('true')
}
if(scrolled=false){
  console.log('false')
}

// remove first cloud from array
function cloudbust() {
  let cloud = clouds.shift()

  if (cloud != null) {
    document.getElementById("sky").removeChild(cloud)
  }
}


// ROTATIOON ATTEMPTS

// rotate on just x mouse
machine.style.rotate = ((((e.x) / visualViewport.width) * 180) - 45) + "deg";

let barrel = document.getElementById("barrel");
window.addEventListener('mousemove', (e) => {
let x = e.clientX *100 / window.innerWidth - 50;
let y = e.clientY *100 / window.innerHeight - 50;
console.log(e.clientX);
barrel.style.left = x + "%";
barrel.style.top = y + "%";
})

//rotate on both x and y 1
$(".move-area").mousemove(function(event) {
  var machine = $("machine");
  console.log('machine', machine)
  var x = (machine.offset().left) + (machine.width() / 2);
  var y = (machine.offset().top) + (machine.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  machine.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

//rotate on both x and y 2
document.querySelector("body").addEventListener("mousemove",mechanism)
function mechanism(){
  const machine = document.getElementById("machine");
  machine.foreach(function(machine){
  let x = (machine.getBoundingClientRect().left) + (machine.clientWidth/2);
  let y = (machine.getBoundingClientRect().top) + (machine.clientWidth/2);
  let radian = math.atan2(event.pageX - x, (event.pageY - y ));
  let rotation = (radian*(180/math.pi) * -1)+270;
  machine.style.transform = "rotate("+rotation+"deg)"
})}
