<?php
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get JSON or POST body
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        $data = $_POST;
    }

    $name = $data['name'] ?? '';
    $phone = $data['phone'] ?? '';
    $service = $data['service'] ?? '';
    $area = $data['address'] ?? $data['area'] ?? '';
    $problem = $data['problem'] ?? '';
    $source = $data['source'] ?? 'Website';
    
    // Combine Area and Problem into Message column just to keep table simple
    $message = "Area: " . $area . " | Problem: " . $problem;

    if (empty($name) || empty($phone)) {
        echo json_encode(["success" => false, "message" => "Name and phone are required."]);
        exit();
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO leads (name, phone, service, message, source, status) VALUES (?, ?, ?, ?, ?, 'pending')");
        $stmt->execute([$name, $phone, $service, $message, $source]);
        
        echo json_encode(["success" => true, "message" => "Lead added successfully."]);
    } catch(PDOException $e) {
        echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
