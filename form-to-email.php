<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
// $visitor_email = $_POST['email'];
$message = $_POST['message'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$visitor_phone = $_POST['phonenumber'];
$position = $_POST['positionRole'];

$username = $_POST['username'];
$company = $_POST['company'];
$email = $_POST['email']; 
$purpose = $_POST['purpose'];




//Validate first
// if(empty($name)||empty($visitor_email)) 
// {
//     echo "Name and email are mandatory!";
//     exit;
// }

// if(IsInjected($visitor_email))
// {
//     echo "Bad email value!";
//     exit;
// }

$email_from = 'chanfoh.lee@gmail.com';//<== update the email address
$email_subject = "kaibo Get Started";
$email_body = "This is the form that was just submitted:
  Purpose: $purpose
  Username:  $username
  Company : $company 
  E-Mail: $email";
    
$to = "smokeninja77@gmail.com";//<== update the email address 
$headers = "From: $email \r\n";
$headers .= "Reply-To: $email \r\n";
// $headers .= "Return-Path: myplace@example.com\r\n";
// $headers .= "CC: sombodyelse@example.com\r\n";

//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
// header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 