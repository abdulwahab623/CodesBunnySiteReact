<?php
$servername = "localhost"; // usually localhost
$username = "your_database_username"; // your database username
$password = "your_database_password"; // your database password
$dbname = "your_database_name"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize it
    $fullname = filter_var($_POST['fullname'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $companyname = filter_var($_POST['companyname'], FILTER_SANITIZE_STRING);
    $contactChannel = filter_var($_POST['flexRadioDefault'], FILTER_SANITIZE_STRING);
    $feedback = filter_var($_POST['feedback'], FILTER_SANITIZE_STRING);

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO ClientRecord (name, email, phone, companyName, contactChannel, feedback) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $fullname, $email, $phone, $companyname, $contactChannel, $feedback);

    // Execute the query
    if ($stmt->execute()) {
        // Prepare email
        $to = "abdulwahab95623@gmail.com"; // Your company's email address
        $subject = "New Contact Form Submission";
        $message = "Name: $fullname\nEmail: $email\nPhone: $phone\nCompany Name: $companyname\nPreferred Contact Channel: $contactChannel\nFeedback: $feedback";
        $headers = "From: $email";

        // Send email
        mail($to, $subject, $message, $headers);

        echo "Data saved and email sent!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Close the connection
$conn->close();
?>
