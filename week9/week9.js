//ch9 examples
window.onload = function(){
    document.querySelector("#dialogBtn").addEventListener('click', dialogs); 
}
function dialogs() {
    window.alert("I'm an Alert! Fear Me!");
    const fearBool = String(window.confirm("Did you fear that alert?"));
    const fearLevel = String(window.prompt("Using a scale of 1-10, how much did you fear the alert?"));
    const fearDiv = document.createElement('div');
    const fearDivParent = document.getElementById("dialogBtn");
    const fearResults = fearBool.concat(fearLevel);
    fearDiv.innerHTML = fearResults;
    fearDivParent.appendChild(fearDiv);
}
