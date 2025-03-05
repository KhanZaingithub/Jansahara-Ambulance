<?

        //$mailto="shahambulanceservice24x7@gmail.com";
		$mailto="mkwebsolutions88@gmail.com";
        $file="index.php";
        $pcount=0;
        $gcount=0;
        $subject = "Enquiry Form Shah Ambulance Website";

        $from="info@jansaharaambulance.com";
        while (list($key,$val)=each($_POST))
        {
        $pstr = $pstr."$key : $val \n ";
        ++$pcount;

        }
        while (list($key,$val)=each($_GET))
        {
        $gstr = $gstr."$key : $val \n ";
        ++$gcount;

        }
        if ($pcount > $gcount)
        {
        $message_body=$pstr;
        mail($mailto,$subject,$message_body,"From:".$from);

        include("$file");
        }
        else
        {
        $message_body=$gstr;

        mail($mailto,$subject,$message_body,"From:".$from);
        include("$file");
        }
        ?>