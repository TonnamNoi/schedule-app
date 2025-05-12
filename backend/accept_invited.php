<?php
session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id']) || !isset($_POST['meeting_id'])) {
    header("Location: ../frontend/login.html");
    exit();
}

$user_id = $_SESSION['user_id'];
$meeting_id = intval($_POST['meeting_id']);

$stmt = $conn->prepare("UPDATE meeting_invitees SET status = 'accepted' WHERE meeting_id = ? AND user_id = ?");
$stmt->bind_param("ii", $meeting_id, $user_id);
$stmt->execute();

$stmt->close();
$conn->close();

// Redirect user to meeting page
header("Location: ../frontend/availability-calender.html?meeting_id=$meeting_id");
exit();
