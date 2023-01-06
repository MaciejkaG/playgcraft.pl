const ip = "mc.playgcraft.pl"
updateStats();
setInterval(updateStats, 1000);

function updateStats() {
    fetch(`https://api.mcsrvstat.us/2/${ip}`)
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            // var data = JSON.parse(json);
            var status = '<span class="red">offline</span>'
            if (json.online) {
                status = '<span class="green">online</span>'
            }
            console.log(status)
            document.getElementById("status").innerHTML = `Status: ${status}`;
            if (json.online) {
                document.getElementById("players").innerHTML = `Gracze: ${json.players.online}/${json.players.max}`;
            }
            document.getElementById("ip").innerHTML = `IP: ${ip}<i class="fas fa-copy"></i>`;
        })
}