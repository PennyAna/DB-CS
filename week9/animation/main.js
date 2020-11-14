const squareElementOne = document.getElementById('squareOne');
let angleOne = 0;
setInterval( ()=>{
    angleOne = (angleOne + 2) % 360;
    squareElementOne.style.transform = `rotate(${angleOne}deg)`
}, 1000/60);