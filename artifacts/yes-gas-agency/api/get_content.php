<?php
require_once 'config.php';

// Always ensure all content rows exist for existing databases (migration-safe)
$new_defaults = [
    ['about', 'about_hero_intro', 'Started with a vision to eliminate gas-related hazards in Hyderabad, Yes Gas Agency has grown into the city\'s most trusted partner for premium, safe, and certified gas appliance servicing.'],
    ['about', 'about_mission', 'To provide absolutely safe, zero-leak, and highly efficient gas services within 60 minutes for every household in Hyderabad, ensuring peace of mind at every meal.'],
    ['about', 'about_vision', 'To become the gold standard in domestic gas apparatus maintenance across South India, pioneered by technology, speed, and uncompromising safety protocols.'],
    ['services_page', 'services_page_title', 'All Gas Services in Hyderabad'],
    ['services_page', 'services_page_subtitle', 'Certified, fast, and safe — every service comes with a 30-day warranty and ID-verified technicians.'],
    ['contact', 'contact_address', '102, Hitech Lane, Madhapur, Hyderabad, Telangana 500081'],
    ['contact', 'contact_phone', '+91 98765 43210'],
    ['contact', 'contact_email', 'support@yesgas.in'],
    ['pricing', 'pricing_title', 'Clear Pricing. No Surprises.'],
    ['pricing', 'pricing_subtitle', 'We charge flat straightforward fees for all standard procedures. Any spare parts required are billed separately strictly at MRP.'],
    ['how_it_works', 'how_it_works_title', 'Fixed in 3 Simple Steps'],
    ['how_it_works', 'how_it_works_subtitle', 'From first call to working stove — the whole process is designed to be fast and hassle-free.'],
    ['faq', 'faq_title', 'Frequently Asked Questions'],
    ['faq', 'faq_subtitle', 'Have a question about our repair process, pricing, or safety standards? Find practical answers here.'],
    ['areas', 'areas_title', 'We Serve All of Hyderabad'],
    ['areas', 'areas_subtitle', 'Technicians stationed across the city to reach you in 2–4 hours.'],
];

try {
    $stmt_migrate = $pdo->prepare("INSERT IGNORE INTO website_content (section_name, field_name, field_value) VALUES (?, ?, ?)");
    foreach ($new_defaults as $row) {
        $stmt_migrate->execute($row);
    }

    $stmt = $pdo->query("SELECT field_name, field_value FROM website_content");
    $content = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $content[$row['field_name']] = $row['field_value'];
    }
    echo json_encode(["success" => true, "data" => $content]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
