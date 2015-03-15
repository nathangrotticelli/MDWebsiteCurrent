<?php

	/* ==========================  Define variables ========================== */

	#Your e-mail address
	define("__TO__", "nmg2225@yahoo.com");

	#Message subject
	define("__SUBJECT__", "examples.com = From:");

	#Success message
	define('__SUCCESS_MESSAGE__', "Your message has been sent. Thank you!");

	#Error message
	define('__ERROR_MESSAGE__', "Error, your message hasn't been sent");

	#Messege when one or more fields are empty
	define('__MESSAGE_EMPTY_FILDS__', "Please fill out all fields");

	/* ========================  End Define variables ======================== */

	//Send mail function
	function send_mail($to,$subject,$message,$headers){
		if(@mail($to,$subject,$message,$headers)){
			echo json_encode(array('info' => 'success', 'msg' => __SUCCESS_MESSAGE__));
		} else {
			echo json_encode(array('info' => 'error', 'msg' => __ERROR_MESSAGE__));
		}
	}

	//Check e-mail validation
	function check_email($email){
		if(!@eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
			return false;
		} else {
			return true;
		}
	}
	// $_POST['name'] = "nathan gortt";
	// $to = "nmg2225@yahoo.com";
	// $subject = "randomWebsite@global.com";
	$message = "random comment";
	//Get post data
	if(isset($_POST['name']) and isset($_POST['mail']) and isset($_POST['comment'])){
		$name 	 = $_POST['name'];
		$mail 	 = $_POST['mail'];
		$website  = $_POST['website'];
		$comment = $_POST['comment'];

		if($name == '') {
			echo json_encode(array('info' => 'error', 'msg' => "Please enter your name."));
			exit();
		} else if($mail == '' or check_email($mail) == false){
			echo json_encode(array('info' => 'error', 'msg' => "Please enter valid e-mail."));
			exit();
		} else if($comment == ''){
			echo json_encode(array('info' => 'error', 'msg' => "Please enter your message."));
			exit();
		} else {
			//Send Mail
			$to = "nmg2225@yahoo.com";
			$subject = "random subject";
			$message = '
			<html>
			<body>
			 <h1>hi</h1>
			</body>
			</html>
			';

		 	 $from = "email@domian.com";
        $headers = "From:" . $from . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
				// $headers .= 'From: ' . $mail . "\r\n";

			send_mail($to,$subject,$message,$headers);
		}
	} else {
		echo json_encode(array('info' => 'error', 'msg' => __MESSAGE_EMPTY_FILDS__));
	}
 ?>
