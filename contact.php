<?php

require("class.phpmailer.php");

echo "Hello World";
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
echo "Hello Worl2222d";
?>

