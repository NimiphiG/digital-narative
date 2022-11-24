console.log('hello')

//move through window on click
document.getElementById('window1').addEventListener('mouseup', addmovethrough, generateCloud)
function addmovethrough() {

  document.getElementById("window1").classList.add("move-through");
  document.getElementById("room").classList.add("move-through");
  document.getElementById('window1').removeEventListener('click', addmovethrough)
}
document.getElementById('window1').addEventListener('animationend', moveToCloudbusting)

function moveToCloudbusting(){
    window.location.href = 'cloudbusting.html'
}