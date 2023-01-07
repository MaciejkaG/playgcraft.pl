const ip = "mc.playgcraft.pl"
updateStats();
setInterval(updateStats, 1000);

function updateStats() {
    fetchWithTimeout(`https://minecraft-status.onrender.com/status?ip=${ip}`, { timeout: 1000 })
        .then(response => response.json())
        .then((json) => {
            document.getElementById("onlinedot").style = "animation: dot 2s infinite;";
            document.getElementById("onlinedot").style.background = "rgb(0, 102, 255)";
            document.getElementById("onlinetext").innerHTML = "online";
            document.getElementById("onlinetext").style.color = "rgb(0, 102, 255)";
            document.getElementById("playercount").innerHTML = `${json.players.online}`;
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
function copyIP() {
    try {
        navigator.clipboard.writeText(ip);
    } catch (err) {
        console.error('Błąd kopiowania IP: ', err);
    } finally {
        document.getElementById("iptooltiptext").style.color = "rgb(0, 102, 255)";
        document.getElementById("iptooltiptext").style.bottom = "-50%";
        document.getElementById("iptooltiptext").innerHTML = "Skopiowano IP!";
        setTimeout(() => {
            document.getElementById("iptooltiptext").style.color = "rgb(255, 255, 255)";
            document.getElementById("iptooltiptext").style.bottom = "-100%";
            document.getElementById("iptooltiptext").innerHTML = "Kliknij aby skopiować!";
        }, 2000);
    }
}