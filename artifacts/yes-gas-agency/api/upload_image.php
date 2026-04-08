<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

if (!isset($_FILES['image']) || !isset($_POST['section_name']) || !isset($_POST['image_name'])) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
    exit;
}

$section_name = $_POST['section_name'];
$image_name = $_POST['image_name'];
$file = $_FILES['image'];

// Validation — use server-side finfo to detect MIME (client-supplied type is spoofable)
$allowed_types = ['image/jpeg', 'image/png', 'image/webp'];
$max_size = 5 * 1024 * 1024; // 5MB

$finfo = new finfo(FILEINFO_MIME_TYPE);
$detected_mime = $finfo->file($file['tmp_name']);

if (!in_array($detected_mime, $allowed_types)) {
    echo json_encode(['success' => false, 'message' => 'Invalid file type. Only JPG, PNG, and WEBP are allowed.']);
    exit;
}

if ($file['size'] > $max_size) {
    echo json_encode(['success' => false, 'message' => 'File size exceeds 5MB limit.']);
    exit;
}

// Generate unique filename to avoid caching issues and conflicts
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid('img_') . '.' . $ext;
$upload_dir = '../public/uploads/';

if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

$target_path = $upload_dir . $filename;
$public_path = '/uploads/' . $filename; // How it will be accessed via web

if (move_uploaded_file($file['tmp_name'], $target_path)) {
    try {
        $stmt = $pdo->prepare("INSERT INTO website_images (section_name, image_name, image_path) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE image_path = VALUES(image_path)");
        $stmt->execute([$section_name, $image_name, $public_path]);
        echo json_encode(['success' => true, 'message' => 'Image uploaded successfully.', 'image_path' => $public_path]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
}
?>
