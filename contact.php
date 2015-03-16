<?php
$name = $_POST["name"];

echo $name;

require 'PHPMailer-master/PHPMailerAutoload.php';


// require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();  // telling the class to use SMTP
$mail->Host     = "smtp.gmail.com"; // SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'nathangrotticelli@gmail.com';
$mail->Password = 'Housetrap123';
$mail->SMTPSecure = 'tls';
$mail->Port 		= 587;
$mail->From     = "nathangrotticelli@gmail.com";
$mail->FromName = 'Meisha';
$mail->AddAddress("nathangrotticelli@gmail.com");

$mail->Subject  = "First PHPMailer Message";
$mail->Body     = "Hi! \n\n This is my first e-mail sent through PHPMailer.";
$mail->isHTML(false);
$mail->WordWrap = 50;

if(!$mail->Send()) {
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
  echo 'Message has been sent.';
}

?>

