<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
$username = $_SESSION['username'];

// Set the session timeout in seconds (e.g., 15 minutes)
$timeout_duration = 900;  // 900 seconds = 15 minutes

// Check if the last activity timestamp exists
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $timeout_duration)) {
    // Last request was more than 15 minutes ago
    session_unset();     // Remove all session variables
    session_destroy();   // Destroy the session
    header("Location: ../frontend/login.html"); // Redirect to login page
    exit();
}

// Update last activity timestamp to current time
$_SESSION['last_activity'] = time();

require_once '../backend/db.php';

$user_id = $_SESSION['user_id'];
$pendingInvites = [];

$sql = "SELECT m.id, m.title, m.description 
        FROM meetings m
        JOIN meeting_invitees mi ON m.id = mi.meeting_id
        WHERE mi.user_id = ? AND mi.status = 'pending'";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
    $pendingInvites[] = $row;
}

$stmt->close();
$conn->close();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./dashboard.css"> <!-- Link to external CSS -->
</head>
<body>
    <div class="container">
        <!-- Sidebar -->
        <nav class="sidebar">
            <div class="logo">
                <h2>MeetingApp</h2>
            </div>
            <ul>
                <li><a href="dashboard.php"><i class="material-icons">dashboard</i> Dashboard</a></li>
                <li><a href="meetings.php"><i class="material-icons">event</i> My Meetings</a></li>
                <li><a href="profile.php"><i class="material-icons">account_circle</i> Profile</a></li>
                <li><a href="../Backend/logout.php"><i class="material-icons">exit_to_app</i> Logout</a></li>
            </ul>
        </nav>

        <!-- Main Content -->
        <div class="main-content">
            <header class="header">
                <div class="welcome-msg">
                    <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
                </div>
            </header>

            <section class="dashboard-cards">
                <div class="card">
                    <h2>Your Upcoming Meetings</h2>
                    <p>You don’t have any meetings scheduled yet. Start by creating one.</p>
                    <a href="./create_meeting_form.php" class="btn">Create a Meeting</a>
                </div>

                <div class="card">
                    <h2>Your Recent Activities</h2>
                    <p>No recent activities. Stay active by scheduling meetings or inviting members.</p>
                </div>
            </section>
        </div>
    </div>

    <?php foreach ($pendingInvites as $invite): ?>
    <div class="invite-popup" id="invite-<?= $invite['id'] ?>">
        <div class="popup-content">
            <h3>You're invited to: </h3>
            <br>
            <h2><?= htmlspecialchars($invite['title']) ?></h2>
            <br>
            <hr>
            <br>
            <p><?= htmlspecialchars($invite['description']) ?></p>
            <br>
            <form method="POST" action="../backend/accept_invited.php">
                <input type="hidden" name="meeting_id" value="<?php echo $invite['meeting_id']; ?>">
                <button type="submit" class="accept-button">Accept</button>
            </form>
            <form method="POST" class="decline-form">
                <input type="hidden" name="meeting_id" value="<?php echo $invite['meeting_id']; ?>">
                <button type="submit" class="decline-button">Decline</button>
            </form>
        </div>
    </div>
    <?php endforeach; ?>

    <script src="../javascript/invitePopup.js"></script>
</body>
</html>
