var previousFileName
var share
const regulamin = "<h1>UWAGA</h1><p><strong>W związku z tym, że regulamin nie jest jeszcze skończony, proszę się nim całkowicie nie kierować</strong></p><h1 id='wstęp'>WSTĘP</h1>\n<p><code>0.1</code> Regulamin podzielony jest na 2 części (nie licząc wstępu) - jedna dotycząca serwera Minecraft, druga dotycząca serwera Discord.<br>\n<code>0.2</code> Regulamin dostępny jest na stronie https://playgcraft.pl/docs?doc=regulamin jak i na serwerze Discord<br>\n<code>0.3</code> Na serwerze Discord obowiązują oficjalne warunki usługi Discorda dostępne na <a href='https://discord.com/terms'>https://discord.com/terms</a></p><br>\n<h1 id='serwer-minecraft'>SERWER MINECRAFT</h1>\n<p><code>1.1</code> Administrator ma prawo zastosować karę z powodu nieuwzględnionego w regulaminie.<br>\n<code>1.2</code> Wszelkie możliwe oszustwa (tj. korzystanie ze zmodyfikowanego klienta dającego znaczną i niesprawiedliwą przewagę nad innymi graczami, łamanie zasad gry, wykorzystywanie błędów na własną korzyść i/lub niekorzyść innych graczy) są bezwzględnie zakazane i grożą tymczasowym lub permanentnym banem z serwera Minecraft.<br>\n<code>1.3</code> Wszelkie multimedialne treści NSFW są zakazane.<br>\n<code>1.4</code> Dokuczanie czy nękanie innych ze względu na ich rasę, płeć czy wierzenia nie będzie tolerowane przez administrację i możliwe jest otrzymanie permanentnego bana bez ostrzeżenia z tego powodu. Żarty z osoby tolerancyjnej która nie ma nic przeciwko temu są jak najbardziej dozwolone.<br>\n<code>(Do dokończenia)</code></p>\n<h1 id='discord'>DISCORD</h1>\n<p><code>2.1</code> Administrator ma prawo zastosować karę z powodu nieuwzględnionego w regulaminie.<br>\n<code>2.2</code> Wykorzystywanie błędów w oprogramowaniu Minecraft-Discord jest niedozwolone.<br>\n<code>2.3</code> Treści NSFW (w tym pornografia, gore) są niedozwolone.<br>\n<code>2.4</code> Dokuczanie czy nękanie innych ze względu na ich rasę, płeć czy wierzenia nie będzie tolerowane przez administrację i możliwe jest otrzymanie permanentnego bana bez ostrzeżenia z tego powodu. Żarty z osoby tolerancyjnej która nie ma nic przeciwko temu są jak najbardziej dozwolone.<br>\n<code>2.5</code> Flooding, spam, nieupoważniona reklama są niedozwolone.</p><br>\n"
const basicTutorial = `<h2>Nie wiesz od czego zacząć?</h2>\n<p>Spokojnie, rozumiemy, że nasz serwer jest bardzo skomplikowany i zaawansowany by umożliwić graczom mistrzowskie bezpieczeństwo i komfort korzystania.<br>W tym poradniku dowiesz się wszystkiego co jest ci potrzebne by zacząć grać na GCraft'cie</p>\n<h1>Dołączanie</h1>\n<p>Po dołączeniu powinniście dołączyć do pustego świata, czyli poczekalni:</p>\n<img src="../assets/img/limbo-screenshot.png" alt="" style="max-width: 60vw">\n<p>Jeżeli serwer jest pełny, zostaniesz do niego przekierowany gdy zwolni się miejsce. <strong>Tak przy okazji - czy wiesz, że gracze wyżsi w randze mają zarezerwowane miejsca na serwerze? Zakupić rangi możesz <a href="https://playgcraft.pl/sklep">w sklepie.</a></strong></p>\n<h1>Po dołączeniu</h1>\n<p>Przed zagraniem, musisz się zarejestrować używając hasła - hasła objęte są enkrypcją i nawet administratorzy nie mają do nich dostępu, ale mimo to zaleca się wybranie hasła odmiennego od haseł w innych usługach. Po zalogowaniu możesz użyć selektora trybów (przedmiotu który otrzymałeś(-aś) na środku paska wyboru) do wybrania trybu na którym chcesz grać</p>\n<h2>Miłej gry! - MaciejkaG</h2>`

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('doc')) {
    const docName = urlParams.get('doc')
    loadFile(docName)
}

function loadFile(fileName) {
    if (previousFileName) {
        document.getElementById(`${previousFileName}-btn`).style.color = "rgb(255, 255, 255)";
    }
    if (fileName=="regulamin") {
        window.history.pushState(null, null, `?doc=${fileName}`);
        document.getElementById(`${fileName}-btn`).style.color = "rgb(0, 102, 255)";
        document.getElementById("doc-name").innerHTML = "Regulamin";
        document.getElementById("doc-block").innerHTML = regulamin;
        document.getElementsByClassName("share-button")[0].style.display = "block";
        previousFileName = fileName
    }
    if (fileName == "basicTutorial") {
        window.history.pushState(null, null, `?doc=${fileName}`);
        document.getElementById(`${fileName}-btn`).style.color = "rgb(0, 102, 255)";
        document.getElementById("doc-name").innerHTML = "Podstawowy poradnik";
        document.getElementById("doc-block").innerHTML = basicTutorial;
        document.getElementsByClassName("share-button")[0].style.display = "block";
        previousFileName = fileName
    }
}

const copyDocURL = str => {
    if (navigator.indexOf('Win') != -1) {
        share = {
            title: 'GCraft',
            text: 'Dokument serwera GCraft',
            url: window.location.href,
        }
        if (navigator.canShare) {
            navigator.share(share)
        } else {
            if (window.isSecureContext && navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
            } else {
                unsecuredCopyToClipboard(window.location.href);
            }
            alert("Skopiowano link do schowka.")
        }
        
    } else {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
        } else {
            unsecuredCopyToClipboard(window.location.href);
        }
        alert("Skopiowano link do schowka.")
    }
    
};