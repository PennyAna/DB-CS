const squareElementOne = document.getElementById('squareOne');
let angleOne = 0;
setInterval( ()=>{
    angleOne = (angleOne + 2) % 360;
    squareElementOne.style.transform = `rotate(${angleOne}deg)`
}, 1000/60);

const squareElementTwo = document.getElementById('squareTwo');
let angleTwo = 0;
function rotate() {
    angleTwo = (angleTwo + 2)%360;
    squareElementTwo.style.transform = `rotate(${angleTwo}deg)`;
    window.requestAnimationFrame(rotate);
}