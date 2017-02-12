<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Results</title>
</head>

<body>

<?php
$ContactName = $_POST['ContactName'];
$Email = $_POST['Email'];
$Comments = $_POST['Comments'];

//Sending Email to form owner
$header = "From: $ContactName\n"
. "Reply-To: $Email\n";
$subject = "Submission to IBGS Website";
$email_to = "ichnology@ku.edu";
$message = "Name: $ContactName\n"
. "Email: $Email\n" . "Comments: $Comments\n";

mail($email_to, $subject ,$message ,$header ) ;

?>


<h1>Thank You for Your Comments</h1>

<p>Your information has been sent</p>

<p>Thank you for your interest in the IchnoBioGeoSciences Research Group</p> 

</body>
</html>
