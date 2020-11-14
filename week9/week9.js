//ch9 examples
window.onload = function(){
    document.querySelector("#dialogBtn").addEventListener('click', dialogs); 
    document.querySelector("#browserBtn").addEventListener('click', browseInfo);
    document.querySelector("#screenBtn").addEventListener('click', screenInfo); 
    document.querySelector("#cookieBtn").addEventListener('click', cookieJar);
    document.querySelector("#makeCookie1").addEventListener('click', makeCookie1);
    document.querySelector("#makeCookie2").addEventListener('click', makeCookie2);
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
    const locationResults = function () {
        for (location of locationInfo) {
            const [key, value] = screen.split("=");
            (`The value of ${key} is ${value}`);
        };
    }
    console.log(locationResults);
    locationDiv.innerText = locationResults.value;
    document.body.appendChild(locationDiv);
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
    const screenResults = function () {
        for (screen of screenInfo) {
            const [key, value] = screen.split("=");
            (`The value of ${key} is ${value}`);
        };
    }
    console.log(screenResults);
    screenDiv.innerText = screenResults.value;
    document.body.appendChild(screenDiv);
}
function makeCookie1() {
    document.cookie = 'name=chocolateChip';
    console.log(document.cookie);
}
function makeCookie2() {
    document.cookie = 'type=delicious';
    console.log(document.cookie);
}
function cookieJar() {
    cookieString = decodeURIComponent(document.cookie);
    const cookieDiv = document.createElement('div');
    cookieDiv.innerText = cookieString;
    document.body.appendChild(cookieDiv);
}