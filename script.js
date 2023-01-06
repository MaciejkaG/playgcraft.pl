const ip = "mc.playgcraft.pl"
document.getElementById("ip").innerHTML = `IP: ${ip}<i class="fas fa-copy"></i>`;
updateStats();
setInterval(updateStats, 1000);

function updateStats() {
    fetchWithTimeout(`https://minecraft-status.onrender.com/status?ip=${ip}`, {timeout: 1000})
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            document.getElementById("status").innerHTML = `Status: <span class="green">online</span>`;
            document.getElementById("players").innerHTML = `Gracze: ${json.players.online}/${json.players.max}`;
        })
}
function serverIsOffline() {
    document.getElementById("status").innerHTML = `Status: <span class="red">offline</span>`;
    document.getElementById("players").innerHTML = `Gracze: -/-`;
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