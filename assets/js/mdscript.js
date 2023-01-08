var previousFileName
const regulamin = "<h1>UWAGA</h1><p><strong>W związku z tym, że regulamin nie jest jeszcze skończony, proszę się nim całkowicie nie kierować</strong></p><h1 id='wstęp'>WSTĘP</h1>\n<p><code>0.1</code> Regulamin podzielony jest na 2 części (nie licząc wstępu) - jedna dotycząca serwera Minecraft, druga dotycząca serwera Discord.<br>\n<code>0.2</code> Regulamin dostępny jest na stronie https://playgcraft.pl/docs?doc=regulamin jak i na serwerze Discord<br>\n<code>0.3</code> Na serwerze Discord obowiązują oficjalne warunki usługi Discorda dostępne na <a href='https://discord.com/terms'>https://discord.com/terms</a></p><br>\n<h1 id='serwer-minecraft'>SERWER MINECRAFT</h1>\n<p><code>1.1</code> Administrator ma prawo zastosować karę z powodu nieuwzględnionego w regulaminie.<br>\n<code>1.2</code> Wszelkie możliwe oszustwa (tj. korzystanie ze zmodyfikowanego klienta dającego znaczną i niesprawiedliwą przewagę nad innymi graczami, łamanie zasad gry, wykorzystywanie błędów na własną korzyść i/lub niekorzyść innych graczy) są bezwzględnie zakazane i grożą tymczasowym lub permanentnym banem z serwera Minecraft.<br>\n<code>1.3</code> Wszelkie multimedialne treści NSFW są zakazane.<br>\n<code>1.4</code> Dokuczanie czy nękanie innych ze względu na ich rasę, płeć czy wierzenia nie będzie tolerowane przez administrację i możliwe jest otrzymanie permanentnego bana bez ostrzeżenia z tego powodu. Żarty z osoby tolerancyjnej która nie ma nic przeciwko temu są jak najbardziej dozwolone.<br>\n<code>(Do dokończenia)</code></p>\n<h1 id='discord'>DISCORD</h1>\n<p><code>2.1</code> Administrator ma prawo zastosować karę z powodu nieuwzględnionego w regulaminie.<br>\n<code>2.2</code> Wykorzystywanie błędów w oprogramowaniu Minecraft-Discord jest niedozwolone.<br>\n<code>2.3</code> Treści NSFW (w tym pornografia, gore) są niedozwolone.<br>\n<code>2.4</code> Dokuczanie czy nękanie innych ze względu na ich rasę, płeć czy wierzenia nie będzie tolerowane przez administrację i możliwe jest otrzymanie permanentnego bana bez ostrzeżenia z tego powodu. Żarty z osoby tolerancyjnej która nie ma nic przeciwko temu są jak najbardziej dozwolone.<br>\n<code>2.5</code> Flooding, spam, nieupoważniona reklama są niedozwolone.</p><br>\n"
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('doc')) {
    const docName = urlParams.get('product')
    loadFile(docName)
}

function loadFile(fileName) {
    if (previousFileName) {
        document.getElementById(`${previousFileName}-btn`).style.color = "rgb(255, 255, 255)";
    }
    if (fileName=="regulamin") {
        document.getElementById(`${fileName}-btn`).style.color = "rgb(0, 102, 255)";
        document.getElementById("doc-name").innerHTML = "Regulamin";
        document.getElementById("doc-block").innerHTML = regulamin;
        previousFileName = fileName
    }
}