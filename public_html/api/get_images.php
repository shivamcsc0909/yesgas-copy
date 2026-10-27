<?php
require_once 'config.php';

try {
    $stmt = $pdo->query("SELECT image_name, image_path FROM website_images");
    $images = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $images[$row['image_name']] = $row['image_path'];
    }
    echo json_encode(["success" => true, "data" => $images]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
