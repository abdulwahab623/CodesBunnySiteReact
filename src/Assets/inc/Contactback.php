<?php
// Get the JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($data) {
    $fullname = $data['fullname'];
    $email = $data['email'];
    $phone = $data['phone'];
    $companyname = $data['companyname'];
    $contactChannel = $data['contactChannel'];
    $feedback = $data['feedback'];

    // Process the form data (e.g., save to a database or send an email)
    // Example: Sending an email
    $to = "abdulwahab95623@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Full Name: $fullname\nEmail: $email\nPhone: $phone\nCompany Name: $companyname\nPreferred Contact Channel: $contactChannel\nFeedback: $feedback";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "Data saved and email sent!"]);
    } else {
        echo json_encode(["error" => "Failed to send the form!"]);
    }
} else {
    echo json_encode(["error" => "Invalid input data!"]);
}
?>
