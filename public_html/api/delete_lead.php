<?php
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    if (!$data) $data = $_POST;

    $id = $data['id'] ?? null;

    if (!$id) {
        echo json_encode(["success" => false, "message" => "Lead ID is required."]);
        exit();
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM leads WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode(["success" => true, "message" => "Lead deleted successfully."]);
    } catch(PDOException $e) {
        echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
