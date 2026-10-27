<?php
// Note: We leave CORS as defined in config, but since this is typically used by admin, we could restrict it.
require_once 'config.php';

try {
    $stmt = $pdo->query("SELECT * FROM leads ORDER BY created_at DESC");
    $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(["success" => true, "data" => $leads]);
} catch(PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
