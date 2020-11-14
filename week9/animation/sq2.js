const squareElementTwo = document.getElementById('squareTwo');
            let angleTwo = 0;
            function rotate() {
                angleTwo = (angleTwo + 2)%360;
                squareElement.style.transform = `rotate(${angleTwo}deg)`
                window.requestAnimationFrame(rotate);
            }
            const id = requestAnimationFrame(rotate);