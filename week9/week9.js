//ch9 examples
window.onload = function(){
    document.querySelector("#dialogBtn").addEventListener('click', dialogs); 
    document.querySelector("#browserBtn").addEventListener('click', browseInfo);
    document.querySelector("#screenBtn").addEventListener('click', screenInfo); 
    document.querySelector("#cookieBtn").addEventListener('click', cookieJar);
}
function dialogs() {
    window.alert("I'm an Alert! Fear Me!");
    const fearBool = String(window.confirm("Did you fear that alert?"));
    const fearLevel = String(window.prompt("Using a scale of 1-10, how much did you fear the alert?"));
    const fearDiv = document.createElement('div');
    const fearResults = fearBool.concat(fearLevel);
    fearDiv.innerHTML = fearResults;
    document.body.appendChild(fearDiv);
}
function browseInfo() {
    const browsOs = window.navigator.userAgent;
    const url = window.location;
    const fullUrl = window.location.href;
    const protocol = window.location.protocol;
    const host = window.location.host;
    const hostname = window.location.hostname;
    const port = window.location.port;
    const pathName = window.location.pathname;
    const search = window.location.search;
    const hash = window.location.hash;
    const origin = window.location.origin;
    const wholeUrl = window.location.toString();
    const locationDiv = document.createElement('div');
    const locationInfo = {
        browsOS: browsOs, 
        URL: url, 
        fullUrl: fullUrl, 
        protocol: protocol, 
        host: host, 
        hostname: hostname, 
        port: port, 
        pathName: pathName, 
        search: search, 
        hash: hash, 
        origin: origin, 
        wholeUrl: wholeUrl
    };
    locationDiv.innerText = function () {
        for (location of locationInfo) {
            const [key, value] = screen.split("=");
            (`The value of ${key} is ${value}`);
        };
        document.body.appendChild(locationDiv);
    }
} 
function screenInfo() {
    const screenHeight = window.screen.height;
    const screenWidth = window.screen.width;    
    const availableWidth = window.screen.availWidth;
    const availableHeight = window.screen.availHeight;
    const winColor = window.screen.colorDepth;
    const screenDiv = document.createElement('div');
    const screenInfo = {
        screenHeight: screenHeight, 
        screenWidth: screenWidth, 
        availableWidth: availableWidth, 
        availableHeight: availableHeight, 
        winColor: winColor
        };
    const screenResults = String(function () {
        for (screen of screenResults) {
            const [key, value] = screen.split("=");
            (`The value of ${key} is ${value}`);
        };
    })
    screenDiv.innerText = screenResults;
    document.body.appendChild(screenDiv);
}


function cookieJar() {
    if (window.onload()){
        window.document.cookie = 'Wizard=Gandalf';
        window.document.cookie = 'Ranger=Aragorn';
        window.document.cookie = 'Druid=Legolas';
        window.document.cookie = 'Fighter=Gimli';
        window.document.cookie = 'Rogue1=Merry';
        window.document.cookie = 'Rogue2=Pippin';
        window.document.cookie = 'Healer=Sam';
        window.document.cookie = 'RingBearer=Frodo';
    };
    const cookieDiv = document.createElement('div');
    const cookieResults = String(function () { 
        const cookies = document.cookie.split("; ");
        for (crumb of cookies) {
        const [key, value] = crumb.split("=");
        (`The value of ${key} is ${value}`);};
    })
    cookieDiv.innerText = cookieResults; 
    document.body.appendChild(cookieDiv);
}