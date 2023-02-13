<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    Wpisz nick kurwa: <input type="text" name="name" />
    <input type="submit" value="Submit" />
</form>

<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    
    $db = new mysqli('node5.icehost.pl:5891', 'u6323_5GcrsNoMsv', '0+Pd5F78KFEgz7Sn.L0Voiyz', 's6323_stats');

    $stmt = $db->prepare("SELECT uuid FROM player WHERE name = ?");
    $stmt->bind_param('s', $name);
    $stmt->execute();
    $result = $stmt->get_result();
    if (mysqli_num_rows($result) != 0) {
        $row = $result->fetch_assoc();
        $uuid = $row['uuid'];
        $stmt = $db->prepare("SELECT val FROM stats WHERE uuid = ? and stat = 'DEATH'");
        $stmt->bind_param('s', $uuid);
        $stmt->execute();
        $result = $stmt->get_result();
        if (mysqli_num_rows($result) != 0) {
            $row = $result->fetch_assoc();
            $death_count = $row['val'];
            echo '<p>Ilosc smierci: '.$death_count.'</p>';
        }
    } else {
        echo '<p>Nie znaleziono gracza.</p>';
    }
}
?>