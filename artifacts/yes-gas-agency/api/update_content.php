<?php
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !is_array($data)) {
    echo json_encode(["success" => false, "message" => "Invalid payload"]);
    exit;
}

try {
    $pdo->beginTransaction();
    // Assuming data is an array of [field_name => value]
    // Note: We need to figure out the section name or just update by field_name.
    // field_name is unique per field and used globally.
    // However, the composite key is section_name + field_name in the schema.
    // Since field_name is practically unique across the table, we can just do an UPDATE ... WHERE field_name = ?
    
    $stmt = $pdo->prepare("UPDATE website_content SET field_value = ? WHERE field_name = ?");
    
    foreach ($data as $field => $val) {
        $stmt->execute([$val, $field]);
    }
    
    $pdo->commit();
    echo json_encode(["success" => true, "message" => "Content updated successfully"]);
} catch (PDOException $e) {
    $pdo->rollBack();
    echo json_encode(["success" => false, "message" => "Update failed: " . $e->getMessage()]);
}
?>
