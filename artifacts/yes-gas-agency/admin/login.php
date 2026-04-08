<?php
session_start();

// Redirect if already logged in
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    header("Location: /admin/index.php");
    exit();
}

// Default Credentials — CHANGE THESE before going live!
// Generate a new hash: password_hash('YOUR_PASSWORD', PASSWORD_BCRYPT)
$default_username = 'admin';
$default_password_hash = '$2y$10$ozH2tDAfGxJUPNxzvbatZu8YI4Y2x2aySHej8/SKaMvufS1yh2U0S';

$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username === $default_username && password_verify($password, $default_password_hash)) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: /admin/index.php");
        exit();
    } else {
        $error = "Invalid username or password!";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Yes Gas Agency</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div class="text-center mb-8">
            <h1 class="text-2xl font-black text-gray-900">Admin Panel</h1>
            <p class="text-gray-500 text-sm mt-1">Yes Gas Agency Leads</p>
        </div>

        <?php if ($error): ?>
            <div class="bg-red-50 text-red-500 text-sm font-semibold p-3 rounded-lg mb-4 text-center border border-red-100">
                <?= htmlspecialchars($error) ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="login.php" class="space-y-5">
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Username</label>
                <input type="text" name="username" required class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            </div>
            <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">Password</label>
                <input type="password" name="password" required class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            </div>
            <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg transition-colors">
                Login
            </button>
        </form>
    </div>
</body>
</html>
