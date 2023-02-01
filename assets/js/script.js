// SERVER STATUS CHECKER
const ip = "mc.playgcraft.pl"
document.getElementById("onlinedot").style.animation = "";
document.getElementById("onlinedot").style.background = "rgb(255, 73, 73)";
document.getElementById("onlinetext").innerHTML = "offline";
document.getElementById("onlinetext").style.color = "rgb(255, 73, 73)";
document.getElementById("playercount").innerHTML = `-`;
updateStats();
setInterval(updateStats, 1000);

var countDownDate = 1675530000000
setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("startTimer").innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("serverStartContainer").style.display = "none";
    }
}, 1000);

function updateStats() {
    fetchWithTimeout(`https://mcapi.us/server/status?ip=${ip}&port=25726`, { timeout: 1000 })
        .then(response => response.json())
        .then((json) => {
            if (json.status === "error" || json.online === false) {
                serverIsOffline()
            } else {
                document.getElementById("onlinedot").style = "animation: dot 2s infinite;";
                document.getElementById("onlinedot").style.background = "rgb(0, 102, 255)";
                document.getElementById("onlinetext").innerHTML = "online";
                document.getElementById("onlinetext").style.color = "rgb(0, 102, 255)";
                document.getElementById("playercount").innerHTML = `${json.players.now}`;
            }
        })
}
function serverIsOffline() {
    document.getElementById("onlinedot").style.animation = "";
    document.getElementById("onlinedot").style.background = "rgb(255, 73, 73)";
    document.getElementById("onlinetext").innerHTML = "offline";
    document.getElementById("onlinetext").style.color = "rgb(255, 73, 73)";
    document.getElementById("playercount").innerHTML = `-`;
}
async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const id2 = setTimeout(() => serverIsOffline(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    clearTimeout(id2);
    return response;
}
const unsecuredCopyToClipboard = (text) => { const textArea = document.createElement("textarea"); textArea.value = text; document.body.appendChild(textArea);  textArea.select(); try { document.execCommand('copy') } catch (err) { console.error('Unable to copy to clipboard', err) } document.body.removeChild(textArea) };
const copyIP = str => {
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(ip);
    } else {
        unsecuredCopyToClipboard(ip);
    }
    document.getElementById("iptooltiptext").style.color = "rgb(0, 102, 255)";
    document.getElementById("iptooltiptext").style.bottom = "-50%";
    document.getElementById("iptooltiptext").innerHTML = "Skopiowano IP!";
    setTimeout(() => {
        document.getElementById("iptooltiptext").style.color = "rgb(255, 255, 255)";
        document.getElementById("iptooltiptext").style.bottom = "-100%";
        document.getElementById("iptooltiptext").innerHTML = "Kliknij aby skopiować!";
    }, 2000);
};