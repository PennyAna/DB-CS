
function dialogs() {
window.alert("I'm an Alert! Fear Me!");
const fearBool = window.confirm("Did you fear that alert?");
const fearLevel = window.prompt("Using a scale of 1-10, how much did you fear the alert?");
const fearDiv = document.createElementById('div');
const fearResults = fearBool.concat(fearLevel);
fearDiv.innerHTML = fearResults.value;
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
        browsOs: browsOs.value, 
        url: url.value, 
        fullUrl: fullUrl.value, 
        protocol: protocol.value, 
        host: host.value, 
        hostname: hostname.value, 
        port: port.value, 
        pathName: pathName.value, 
        search: search.value, 
        hash: hash.value, 
        origin: origin.value, 
        wholeUrl: wholeUrl.value
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


document.getElementById("reloadBtn").addEventListener = window.location.reload();
document.getElementById("assignBtn").addEventListener = window.location.assign('../assignments.html');
document.getElementById("replaceBtn").addEventListener = window.location.replace('../assignments.html');

function historyThrice() {
    const historyResults = {
        window.history.length(), 
        window.history.go(-1),
        window.history.go(0),
        window.history.go(1)
    }
    for (history of historyResults) {
        document.write(history);
    }
}

document.getElementById("forwardBtn").addEventListener(window.history.forward());
document.getElementById("backwardBtn").addEventListener(window.history.back());

function screenInfo() {
    const screenHeight = window.screen.height();
    const screenWidth = window.screen.width();    
    const availableWidth = window.screen.availWidth();
    const availableHeight = window.screen.availHeight();
    const winColor = window.screen.colorDepth();
    const screenDiv = document.createElementById('div');
    const screenResults = {
        screenHeight: screenHeight.value, 
        screenWidth: screenWidth.value, 
        availableWidth: availableWidth.value, 
        availableHeight: availableHeight.value, 
        winColor: winColor.value
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
