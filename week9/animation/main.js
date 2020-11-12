const squareElementOne = document.getElementById('squareOne');
let angle = 0;
setInterval( ()=>{
    angle = (angle + 2) % 360;
    squareElementOne.style.transform = `rotate(${angle}deg)`
}, 1000/60);

const squareElementTwo = document.getElementById('squareTwo');
let angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    squareElementTwo.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);
document.getElementById("cancelbtn").addEventListener = cancelAnimationFrames(id);