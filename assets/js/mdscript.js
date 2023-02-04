var previousFileName
var share
const regulamin = "<h1>UWAGA</h1><p><strong>W związku z tym, że regulamin nie jest jeszcze skończony, proszę się nim całkowicie nie kierować</strong></p><h1 id='wstęp'>WSTĘP</h1>\n<p><code>0.1</code> Regulamin podzielony jest na 2 części (nie licząc wstępu) - jedna dotycząca serwera Minecraft, druga dotycząca serwera Discord.<br>\n<code>0.2</code> Regulamin dostępny jest na stronie https://playgcraft.pl/docs?doc=regulamin jak i na serwerze Discord<br>\n<code>0.3</code> Na serwerze Discord obowiązują oficjalne warunki usługi Discorda dostępne na <a href='https://discord.com/terms'>https://discord.com/terms</a></p><br>\n<h1 id='serwer-minecraft'>SERWER MINECRAFT</h1>\n<p><code>1.1</code> Administrator ma prawo zastosować karę z powodu nieuwzględnionego w regulaminie.<br>\n<code>1.2</code> Wszelkie możliwe oszustwa (tj. korzystanie ze zmodyfikowanego klienta dającego znaczną i niesprawiedliwą przewagę nad innymi graczami, łamanie zasad gry, wykorzystywanie błędów na własną korzyść i/lub niekorzyść innych graczy) są bezwzględnie zakazane i grożą tymczasowym lub permanentnym banem z serwera Minecraft.<br>\n<code>1.3</code> Wszelkie multimedialne treści NSFW są zakazane.<br>\n<code>1.4</code> Dokuczanie czy nękanie innych ze względu na ich rasę, płeć czy wierzenia nie będzie tolerowane przez administrację i możliwe jest otrzymanie permanentnego bana bez ostrzeżenia z tego powodu. Żarty z osoby tolerancyjnej która nie ma nic przeciwko temu są jak najbardziej dozwolone.<br>\n<code>(Do dokończenia)</code></p>\n<h1 id='discord'>DISCORD</h1>\n<p><code>2.1</code> Administrator ma prawo zastosować karę z powodu nieuwzględnionego w regulaminie.<br>\n<code>2.2</code> Wykorzystywanie błędów w oprogramowaniu Minecraft-Discord jest niedozwolone.<br>\n<code>2.3</code> Treści NSFW (w tym pornografia, gore) są niedozwolone.<br>\n<code>2.4</code> Dokuczanie czy nękanie innych ze względu na ich rasę, płeć czy wierzenia nie będzie tolerowane przez administrację i możliwe jest otrzymanie permanentnego bana bez ostrzeżenia z tego powodu. Żarty z osoby tolerancyjnej która nie ma nic przeciwko temu są jak najbardziej dozwolone.<br>\n<code>2.5</code> Flooding, spam, nieupoważniona reklama są niedozwolone.</p><br>\n"
const basicTutorial = `<h2>Nie wiesz od czego zacząć?</h2>\n<p>Spokojnie, rozumiemy, że nasz serwer jest bardzo skomplikowany i zaawansowany by umożliwić graczom mistrzowskie bezpieczeństwo i komfort korzystania.<br>W tym poradniku dowiesz się wszystkiego co jest ci potrzebne by zacząć grać na GCraft'cie</p>\n<h1>Dołączanie</h1>\n<p>Po dołączeniu powinniście dołączyć do pustego świata, czyli poczekalni:</p>\n<img src="../assets/img/limbo-screenshot.png" alt="" style="max-width: 60vw">\n<p>Jeżeli serwer jest pełny, zostaniesz do niego przekierowany gdy zwolni się miejsce. <strong>Tak przy okazji - czy wiesz, że gracze wyżsi w randze mają zarezerwowane miejsca na serwerze? Zakupić rangi możesz <a href="https://playgcraft.pl/sklep">w sklepie.</a></strong></p>\n<h1>Po dołączeniu</h1>\n<p>Przed zagraniem, musisz się zarejestrować używając hasła - hasła objęte są enkrypcją i nawet administratorzy nie mają do nich dostępu, ale mimo to zaleca się wybranie hasła odmiennego od haseł w innych usługach. Po zalogowaniu możesz użyć selektora trybów (przedmiotu który otrzymałeś(-aś) na środku paska wyboru) do wybrania trybu na którym chcesz grać</p>\n<h2>Miłej gry! - MaciejkaG</h2>`
const elytraPvPGuide = '<h2>W tym poradniku dowiesz się więcej o naszym głównym trybie - ElytraPvP - oraz nauczysz się na nim grać.</h2>\n<p>Tryb ElytraPvP w skrócie polega na walce, kopaniu, budowaniu i innych aktywnościach w celu zdobycia większej ilości coinów potrzebnych do ulepszenia wyposażenia</p>\n<h1>Quickstart</h1>\n<p>W tej części poradnika wytłumaczę jak najszybciej zacząć grać na serwerze, oraz co robić później</p>\n<p>Po wejściu do trybu ElytraPvP, powinniście znaleźć się w lobby. Lobby ElytraPvP z lotu ptaka wygląda tak jak poniżej:<br></p>\n<img src="../assets/img/lobby-elytrapvp-opisane.png" alt="" style="max-width: 60vw">\n<p>Na zdjęciu zaznaczyłem ważne elementy w lobby. Numery 1, 2, 3 i 5 to portale, a numer 4 to sklep ElytraPvP.</p>\n<p><strong>ProTip: Pamiętaj, GPoints i coiny na ElytraPvP to dwie różne rzeczy!!!</strong></p>\n<h2>Objaśnienia lobby:</h2>\n<p><strong>Numer 1</strong> to portal prowadzący do tzw. "Noob mine", skupiska kopalnii w której PvP jest wyłączone - jest to dobry sposób na zarobienie coinów gdy ma się już kilof ale nie jest się gotowym na walkę.</p>\n<p><strong>Numer 2</strong> to portal prowadzący do głównej części ElytraPvP - Boxa, ogromnego miejsca w którym PvP jest włączone, można budować, dostępne są większe kopalnie - w tym kopalnia drewna potrzebnego do budowy i znajduje się tam wiele różnych ciekawych pomieszczeń i sekcji o których wspomnę w dalszej części poradnika.</p>\n<p><strong>Numer 3</strong> to miejsce w którym gracze mogą otwierać skrzynki gdy posiadają do nich klucze. Znajdują się tam skrzynki ekskluzywne dla rang, codzienne, i inne, takie jak np. Discord crate - codzienna skrzynka tylko dla członków serwera Discord</p>\n<p><strong>Numer 4</strong> to sklep - tutaj możesz wymieniać coiny na stacked coiny i na odwrót, sprzedawać bloki i co najważniejsze - kupować wyposażenie, mikstury i totemy.</p>\n<p><strong>Numer 5</strong> to miejsce na którym skupimy się najbardziej - Staw w którym można łowić ryby, znajduje się tam villager u którego można wymieniać ryby i sprzedawać je za coiny. Jest to świetne miejsce dla początkujących graczy, którzy nie mają absolutnie nic.</p>\n<h2>Jak zacząć zarabiać?</h2>\n<p>Zarabiać można na wiele sposobów, na początku jest ich mało, ale dzięki nim bardzo szybko można zdobyć pierwsze coiny.</p>\n<p><strong>Sposób 1:</strong> Dla graczy z rangą - Gracze z rangą mogą otwierać dzienne skrzynki rang zawierające set ekskluzywny dla rangi, potem mogą rozpocząć kopanie na jednym z warpów. Czym są warpy? To są miejsca ekskluzywne dla rang w których PvP jest wyłączone i można zdobyć dobry loot. Aby przenieść się do warpa wystarczy użyć komendy <code>/warp &lt;ranga&gt;</code>, a aby z niego wrócić komendy <code>/spawn</code></p>\n<p><strong>Sposób 2:</strong> Skorzystanie z dziennej skrzynki - Jeżeli jeszcze jej nie użyłeś, możesz spróbować szczęścia w dziennej skrzynce, masz szansę otrzymać z niej wystarczającą ilość coinów do zdobycia kilofa.</p>\n<p><strong>Sposób 3:</strong> Wędkarstwo - Wędkarstwa może podjąć się każdy niezależnie od rangi, wystarczy wejść do stawu i użyć komendy <code>/wedka</code> aby otrzymać wędkę a potem łowić i sprzedawać ryby.</p>\n<h2>Co potem?</h2>\n<p>Po zdobyciu pierwszych coinów zaleca się zakup kilofa i rozpoczęcie kopania w noob mine, po uzbieraniu pieniędzy na set zalecamy rozpoczęcie walki - jest to najwydajniejszy sposób na zdobycie coinów, ale też najbardziej ryzykowny.</p>\n<h1>Objaśnienia niektórych mechanik</h1>\n<p>W tej części poradnika postaram się objaśnić najważniejsze mechaniki/pojęcia związanych z ElytraPvP.</p>\n<p><strong>STRENGTH 1 ARENA</strong> - Miejsce na boxie, do którego można dostać się portalem na lewo od spawnu. Jest ono przeznaczone stricte do PvP i każdy gracz tam obecny otrzymuje efekt strength 1.</p>\n<p><strong>Creeper</strong> - Strefa na boxie oznaczona zielonym kolorem, znajduje się na prawo od spawnu. Jest to świetne miejsce do PvP oraz można tam ulepszać set do creeperowego.</p>\n<p><strong>NO ESCAPE ROOM</strong> - Miejsce z którego nie ma wyjścia innego niż użycie komendy <code>/spawn</code>, świetne do prowadzenia ryzykownych walk. Znajduje się za kopalniami na dole ściany naprzeciwko spawnu.</p>\n<h2>Miłej gry i powodzenia! - MaciejkaG</h2>'

console.log(elytraPvPGuide)

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
    if (fileName == "elytraPvPGuide") {
        window.history.pushState(null, null, `?doc=${fileName}`);
        document.getElementById(`${fileName}-btn`).style.color = "rgb(0, 102, 255)";
        document.getElementById("doc-name").innerHTML = "Poradnik do trybu ElytraPvP";
        document.getElementById("doc-block").innerHTML = elytraPvPGuide;
        document.getElementsByClassName("share-button")[0].style.display = "block";
        previousFileName = fileName
    }
}

const copyDocURL = str => {
    if (navigator.canShare) {
        share = {
            title: 'GCraft',
            text: 'Dokument serwera GCraft',
            url: window.location.href,
        }
        navigator.share(share)
    } else {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
        } else {
            unsecuredCopyToClipboard(window.location.href);
        }
        alert("Skopiowano link do schowka.")
    }
};