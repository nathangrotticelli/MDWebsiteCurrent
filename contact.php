<?php
$name = $_POST["name"];

echo $name;
echo $name;
if(empty($output)) {
    echo 'Nothing interesting here!';
}else{
	echo 'hello world';
}

ob_start();
require_once 'js/class.phpmailer.php';
$output = ob_get_flush(); // ob_get_clean() if you want to suppress the output

if(empty($output)) {
    echo 'Nothing interesting here!';
}else{
	echo 'hello world';
}

// require("class.phpmailer.php");

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

