<?php
$to = "mkwebsolutions88@gmail.com"; // Replace with your email
$subject = "Test Mail";
$message = "This is a test email.";
$headers = "From: test@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully.";
} else {
    echo "Mail sending failed.";
}
?>
