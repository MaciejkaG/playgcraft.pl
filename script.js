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

document.getElementById("switch").addEventListener("change", function () {
    if (document.getElementById("switch").checked == true) {
        setCookie("darkTheme", 1);
        document.getElementsByTagName("body")[0].setAttribute("style", "animation: darkTheme 0.5s 1; color: white; background-color: #000000;");
    } else {
        setCookie("darkTheme", 0);
        document.getElementsByTagName("body")[0].setAttribute("style", "animation: lightTheme 0.5s 1; color: black;");
        let bgAnimation = setTimeout(() => {
            document.getElementsByTagName("body")[0].setAttribute("style", "animation: bg-animation 10s ease-in-out infinite;");
        }, 500);
    }
});
if (getCookie("darkTheme") == 1) {
    document.getElementById("switch").checked = true;
    document.getElementsByTagName("body")[0].setAttribute("style", "animation: darkTheme 0.1s 1; color: white; background-color: #000000;");
    setCookie("darkTheme", 1);
}
else {
    document.getElementById("switch").checked = false;
    document.getElementsByTagName("body")[0].setAttribute("style", "animation: bg-animation 10s ease-in-out infinite; color: black;");
    setCookie("darkTheme", 0);
}

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + "; path=/";
}
function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
