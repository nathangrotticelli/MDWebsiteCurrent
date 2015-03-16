<?php
$name = $_POST["name"];

echo $name;
if(!@include("class.phpmailer.php")) throw new Exception("Failed to include 'script.php'");

require("class.phpmailer.php");

if(!@include("class.phpmailer.php")) throw new Exception("Failed to include2222 'script.php'");

$mail = new PHPMailer();

$mail->IsSMTP();  // telling the class to use SMTP
$mail->Host     = "smtp.gmail.com"; // SMTP server

$mail->From     = "nathangrotticelli@gmail.com";
$mail->AddAddress("nathangrotticelli@gmail.com");

$mail->Subject  = "First PHPMailer Message";
$mail->Body     = "Hi! \n\n This is my first e-mail sent through PHPMailer.";
$mail->WordWrap = 50;

if(!$mail->Send()) {
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
  echo 'Message has been sent.';
}

?>

