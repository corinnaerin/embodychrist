<?php
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!
 
$data = file_get_contents("php://input");
 
$objData = json_decode($data);

$to = "jim@embodychrist.com";

if (mail($to, "$objData->subject from $objData->name", "$objData->message", "From: $objData->email")) {
    echo "Message sent successfully";
} else {
    echo "An error occurred while sending the message";
}

?>