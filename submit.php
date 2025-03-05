<?php

        $email;$comment;$captcha;

        if(isset($_POST['name'])){

          $Name=$_POST['name'];

        }if(isset($_POST['email'])){

          $Email=$_POST['email'];

        }if(isset($_POST['contactnumber'])){

          $ontactNumber=$_POST['contactnumber'];

        }if(isset($_POST['message'])){

          $Address=$_POST['message'];

        }if(isset($_POST['g-recaptcha-response'])){

          $captcha=$_POST['g-recaptcha-response'];

        }

        if(!$captcha){

          //echo '<h2>Please check the the captcha form.</h2>';

		  echo '<script type="text/javascript">alert("Please check the the captcha form.");history.go(-1);</script>';

          exit;

        }

        $secretKey = "6Ld2dt4ZAAAAAJNLbzb6o43I9jVJ0m6T029Z3cK_"; 

        $ip = $_SERVER['REMOTE_ADDR'];

        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);

        $responseKeys = json_decode($response,true);

        if(intval($responseKeys["success"]) !== 1) {

          //echo '<h2>You are spammer ! Get the @$%K out</h2>';

		   echo '<script type="text/javascript">alert("You are spammer ! Get the @$%K out");history.go(-1);</script>';

        } else {

          //echo '<h2>Thanks for posting comment.</h2>';

		  

		  

		 //$to = 'docdrk.prasanna@gmail.com,info@liverandpancreasclinic.com,liverandpancreasclinic@gmail.com,maleek.sayyad@gmail.com';

		$to = 'shahambulanceservice24x7@gmail.com';

		

    	$subject = 'Inquiry Submited from Jan Sahara Ambulance Website';

		$a=$_SERVER['HTTP_REFERER'];

		$ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';



		

		$message .= "Name : " . $_POST['name'] . "\n\n";

		
		$message .= "Email : " . $_POST['email'] . "\n\n";

		$message .= "Contact Number : " . $_POST['contactnumber'] . "\n\n";

		$message .= "Message : " . $_POST['message'] . "\n\n";

	

		//$message .= "Page Url : " . $_POST['Page-Url'] . "\n\n";

		$message .= "Page URL : " . $a . "\n\n";

		$message .= "IP : " . $ip . "\n\n";

		

		$headers = "From:". $_POST['email']. "\n\n";

		$headers = "BCC:mkwebsolutions88@gmail.com,ambulanceserviceinmumbai@gmail.com";

    



    	mail($to, $subject, $message, $headers);

		//redirect to 'thank-you page

		header('Location: thankyou.php');

		

        }





  ?>