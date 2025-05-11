<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id']) || !isset($_POST['meeting_id'])) {
    header("Location: ../frontend/login.html");
    exit();
}

$user_id = $_SESSION['user_id'];
$meeting_id = intval($_POST['meeting_id']);

$stmt = $conn->prepare("UPDATE meeting_invitees SET status = 'declined' WHERE meeting_id = ? AND user_id = ?");
$stmt->bind_param("ii", $meeting_id, $user_id);

if ($stmt->execute()) {
    // Log success if query executes
    file_put_contents('log.txt', "Updated meeting invite status for meeting_id $meeting_id and user_id $user_id\n", FILE_APPEND);
} else {
    // Log failure if query doesn't execute
    file_put_contents('log.txt', "Failed to update meeting invite status for meeting_id $meeting_id and user_id $user_id\n", FILE_APPEND);
}

$stmt->close();
$conn->close();

// Redirect user back to dashboard after declining
header("Location: ../frontend/dashboard.php");
exit();
