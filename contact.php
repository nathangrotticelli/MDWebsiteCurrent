<?php

	/* ==========================  Define variables ========================== */

require 'PHPMailer-master/PHPMailerAutoload.php';


// require("class.phpmailer.php");
	// #Your e-mail address
	// define("__TO__", "test@test.com");

	// #Message subject
	// define("__SUBJECT__", "");

	#Success message
	define('__SUCCESS_MESSAGE__', "Your message has been sent. Thank you!");

	#Error message
	define('__ERROR_MESSAGE__', "Error, your message hasn't been sent");

	#Messege when one or more fields are empty
	define('__MESSAGE_EMPTY_FILDS__', "Please fill out  all fields");

	/* ========================  End Define variables ======================== */

	//Send mail function
	function send_mail($mail){
			if(!$mail->Send()) {
				 echo json_encode(array('info' => 'error', 'msg' => __ERROR_MESSAGE__));

			} else {
			  		echo json_encode(array('info' => 'success', 'msg' => __SUCCESS_MESSAGE__));
			}
		// if(@mail($to,$subject,$message,$headers)){
		// 	echo json_encode(array('info' => 'success', 'msg' => __SUCCESS_MESSAGE__));
		// } else {
		// 	echo json_encode(array('info' => 'error', 'msg' => __ERROR_MESSAGE__));
		// }
	}

	//Check e-mail validation
	function check_email($email){
		if(!@eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
			return false;
		} else {
			return true;
		}
	}

	//Get post data
	if(isset($_POST['name']) and isset($_POST['mail']) and isset($_POST['comment'])){
		$name 	 = $_POST['name'];
		$mail2 	 = $_POST['mail'];
		// $website  = $_POST['website'];
		$comment = $_POST['comment'];

		if($name == '') {
			echo json_encode(array('info' => 'error', 'msg' => "Please enter your name."));
			exit();
		} else if($mail2 == '' or check_email($mail2) == false){
			echo json_encode(array('info' => 'error', 'msg' => "Please enter valid e-mail."));
			exit();
		} else if($comment == ''){
			echo json_encode(array('info' => 'error', 'msg' => "Please enter your message."));
			exit();
		} else {
			$mail = new PHPMailer();

			$mail->IsSMTP();  // telling the class to use SMTP
			$mail->Host     = "smtp.gmail.com"; // SMTP server
			$mail->SMTPAuth = true;
			$mail->SMTPDebug = 0;
			$mail->Username = 'nathangrotticelli@gmail.com';
			$mail->Password = 'Housetrap123';
			$mail->SMTPSecure = 'tls';
			$mail-> Port 		= 587;
			$mail->From     = "nmg2225@yahoo.com";
			$mail->FromName = $name;
			$mail->AddAddress("ngrotti1@binghamton.edu");

			$mail->Subject  = "MultiDyne Website Contact Submission";
			$mail->Body     = $comment;
			$mail->isHTML(false);
			$mail->WordWrap = 60;
			//Send Mail
			// $to = __TO__;
			// $subject = __SUBJECT__ . ' ' . $name;
			// $message = '
			// <html>
			// <head>
			//   <title>Mail from '. $name .'</title>
			// </head>
			// <body>
			//   <table style="width: 500px; font-family: arial; font-size: 14px;" border="1">
			// 	<tr style="height: 32px;">
			// 	  <th align="right" style="width:150px; padding-right:5px;">Name:</th>
			// 	  <td align="left" style="padding-left:5px; line-height: 20px;">'. $name .'</td>
			// 	</tr>
			// 	<tr style="height: 32px;">
			// 	  <th align="right" style="width:150px; padding-right:5px;">E-mail:</th>
			// 	  <td align="left" style="padding-left:5px; line-height: 20px;">'. $mail .'</td>
			// 	</tr>
			// 	<tr style="height: 32px;">
			// 	  <th align="right" style="width:150px; padding-right:5px;">subject:</th>
			// 	  <td align="left" style="padding-left:5px; line-height: 20px;">'. $subject .'</td>
			// 	</tr>
			// 	<tr style="height: 32px;">
			// 	  <th align="right" style="width:150px; padding-right:5px;">Comment:</th>
			// 	  <td align="left" style="padding-left:5px; line-height: 20px;">'. $comment .'</td>
			// 	</tr>
			//   </table>
			// </body>
			// </html>
			// ';


			// $headers  = 'MIME-Version: 1.0' . "\r\n";
			// $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
			// $headers .= 'From: ' . $mail . "\r\n";

			send_mail($mail);
		}
	} else {
		echo json_encode(array('info' => 'error', 'msg' => __MESSAGE_EMPTY_FILDS__));
	}
 ?>
