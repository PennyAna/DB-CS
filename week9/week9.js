window.onload = function(){
    document.querySelector("#dialogBtn").addEventListener('click', dialogs); 
    document.querySelector("#browserBtn").addEventListener('click', browseInfo);
    document.querySelector("#reloadBtn").addEventListener('click', window.location.reload);
    document.querySelector("#assignBtn").addEventListener('click', window.location.assign('../assignments.html'));
    document.querySelector("#replaceBtn").addEventListener('click', window.location.replace('../assignments.html'));
    document.querySelector("#historyBtn").addEventListener('click', historyThrice);
    document.querySelector("#forwardBtn").addEventListener('click', window.history.forward);
    document.querySelector("#backwardBtn").addEventListener('click', window.history.back);
    document.querySelector("#screenBtn").addEventListener('click', screenInfo);
    document.querySelector("#cookieBtn").addEventListener('click', cookieJar);
}

function dialogs() {
window.alert("I'm an Alert! Fear Me!");
const fearBool = window.confirm("Did you fear that alert?");
const fearLevel = window.prompt("Using a scale of 1-10, how much did you fear the alert?");
const fearDiv = document.createElementById('div');
const fearResults = fearBool.concat(fearLevel);
fearDiv.innerHTML = fearResults;
document.body.appendChild(fearDiv);
}
function browseInfo() {
    const browsOs = window.navigator.userAgent();
    const url = window.location();
    const fullUrl = window.location.href();
    const protocol = window.location.protocol();
    const host = window.location.host();
    const hostname = window.location.hostname();
    const port = window.location.port();
    const pathName = window.location.pathname();
    const search = window.location.search();
    const hash = window.location.hash();
    const origin = window.location.origin();
    const wholeUrl = window.location.toString();

    const locationInfo = {
        browsOs: browsOs, 
        url: url, 
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
    const locationDiv = document.createElementById('div');
    const locationResults = document.locationInfo.split("; ");
    locationDiv.innerHTML = function () { 
        for (location of locationResults) {
        const [key, value] = location.split("=");
        (`The value of ${key} is ${value}`);};
    document.body.appendChild(locationDiv);
    }
}
function historyThrice() {
    const historyLength = window.history.length();
    const prevHistory = window.history.go(-1);
    const currentHistory = window.history.go(0);
    const fwdHistory = window.history.go(1);
    const historyResults = {
        historyLength: historyLength, 
        prevHistory: prevHistory,
        currentHistory: currentHistory, 
        fwdHistory: fwdHistory
    }
    for (history of historyResults) {
        document.write(history);
    }
}
function screenInfo() {
    const screenHeight = window.screen.height();
    const screenWidth = window.screen.width();    
    const availableWidth = window.screen.availWidth();
    const availableHeight = window.screen.availHeight();
    const winColor = window.screen.colorDepth();
    const screenDiv = document.createElementById('div');
    const screenResults = {
        screenHeight: screenHeight, 
        screenWidth: screenWidth, 
        availableWidth: availableWidth, 
        availableHeight: availableHeight, 
        winColor: winColor
        };
    screenDiv.innerHTML = function (){
        for (screen of screenResults) {
            const [key, value] = screen.split("=");
            (`The value of ${key} is ${value}`);};
        };
    document.body.appendChild(screenDiv);
}
document.cookie = 'Wizard=Gandalf';
document.cookie = 'Ranger=Aragorn';
document.cookie = 'Druid=Legolas';
document.cookie = 'Fighter=Gimli';
document.cookie = 'Rogue1=Merry';
document.cookie = 'Rogue2=Pippin';
document.cookie = 'Healer=Sam';
document.cookie = 'RingBearer=Frodo';
function cookieJar() {
    const cookieDiv = document.createElementById('div');
    const cookies = document.cookie.split("; ");
    cookieDiv.innerHTML = function () { 
        for (crumb of cookies) {
        const [key, value] = crumb.split("=");
        (`The value of ${key} is ${value}`);};
    document.body.appendChild(cookieDiv);
    }
}
