
<?php

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


$nameErr="";
$emailErr="";
$messageErr="";
if(isset($_POST["submit"])){
  $name=$_POST['name'];
  $email=$_POST['email'];
  $message=$_POST['message'];

  
    if (empty($name)) {
      $nameErr = "Name is required";
    } else {
      $name = test_input($name);
      // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z ]*$/",$name)){
        $nameErr = "Only letters and white space allowed";
      }
    }

    if (empty($_POST["email"])) {
      $emailErr = "Email is required";
    } else {
      $email = test_input($_POST["email"]);
      // check if e-mail address is well-formed
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
      }
    }

    if (empty($_POST["message"])) {
        $messageErr = "Message is required";
      } else {
        $message = test_input($_POST["message"]);
      }


      if($nameErr=="" && $emailErr=="" && $messageErr==""){
        // de pus mailul companiei
        $emailTo="tudor_alex.ilie@yahoo.com";
        $headers= "From: ".$email;
        $subject= "Mail from ".$name;
        $txt="You have received an email from: ".$email.".\n\n".$message;

        mail($emailTo, $subject, $txt);

      }


}

include("./Contact.html");
?>





