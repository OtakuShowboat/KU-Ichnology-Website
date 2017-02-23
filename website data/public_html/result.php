<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="robots"
        content="all" />
<title>Results</title>
<link rel="stylesheet"
        type="text/css"
        media="screen"
        href="/rw_common/themes/alpha/styles.css" />
        <!--[if IE 6]><link rel="stylesheet" type="text/css" media="screen" href="/rw_common/themes/alpha/ie6.css"  /><![endif]-->
        <!--[if IE 6]><style type="text/css" media="screen">body {behavior: url(/rw_common/themes/alpha/csshover.htc);}</style><![endif]-->

<script type="text/javascript"
      src="/rw_common/themes/alpha/javascript.js">
</script>
<script> 
$(function(){
  $("#header").load("/header.html"); 
  $("#footer").load("/footer.html"); 
});
</script>
</head>

<body>
<?php
// Your code here to handle a successful verification
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
<div id="container">
    <!-- Start container -->
	<div id="header"></div>
    <div id="contentContainer">
      <!-- Start main content wrapper -->

      <div id="content">
        <!-- Start content -->
<h1>Thank You for Your Comments</h1>

<p>Your information has been sent</p>

<p>Thank you for your interest in the IchnoBioGeoSciences Research Group</p> 
		<br />
		</span>
      </div><!-- End content -->
    </div><!-- End main content wrapper -->

    <div class="clearer"></div>

    <div id="footer"></div>
	</div>





</body>
</html>
