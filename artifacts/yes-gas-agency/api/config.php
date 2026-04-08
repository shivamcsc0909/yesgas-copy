<?php
$allowed_origins = ["https://yesgas.in", "https://www.yesgas.in"];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root'); // CHANGE THIS: use Hostinger DB username
define('DB_PASS', 'root'); // CHANGE THIS: use Hostinger DB password
define('DB_NAME', 'yesgas_leads');

try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";charset=utf8mb4", DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "`");
    $pdo->exec("USE `" . DB_NAME . "`");
    
    // Original leads table
    $sql = "CREATE TABLE IF NOT EXISTS leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        service VARCHAR(255),
        message TEXT,
        source VARCHAR(255),
        status ENUM('pending', 'contacted') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);

    // New website_content table
    $sql_content = "CREATE TABLE IF NOT EXISTS website_content (
        id INT AUTO_INCREMENT PRIMARY KEY,
        section_name VARCHAR(50) NOT NULL,
        field_name VARCHAR(50) NOT NULL,
        field_value TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY section_field (section_name, field_name)
    )";
    $pdo->exec($sql_content);

    // New website_images table
    $sql_images = "CREATE TABLE IF NOT EXISTS website_images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        section_name VARCHAR(50) NOT NULL,
        image_name VARCHAR(50) NOT NULL,
        image_path VARCHAR(255) NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY section_image (section_name, image_name)
    )";
    $pdo->exec($sql_images);

    // Initialize text content if empty
    $count = $pdo->query("SELECT COUNT(*) FROM website_content")->fetchColumn();
    if ($count == 0) {
        $insert = "INSERT IGNORE INTO website_content (section_name, field_name, field_value) VALUES 
            ('hero', 'hero_title', 'Stop Struggling With Your Gas Stove —'),
            ('hero', 'hero_subtitle', 'Certified technicians at your door in 2–4 hours. All brands. All problems. 30-day warranty.'),
            ('hero', 'hero_cta', 'Call Now'),
            ('services', 'services_title', 'Book Your Gas Expert Today!'),
            ('services', 'services_subtitle', 'From routine repair to emergency leaks, our certified technicians handle it all with complete safety guarantees.'),
            ('about', 'about_title', 'Safety is Our Religion Today'),
            ('about', 'about_subtitle', 'Every technician carries a multi-point safety checklist. Before leaving, we verify zero leakage using certified pressure testing equipment. Your family\'s safety is non-negotiable.'),
            ('about', 'about_hero_intro', 'Started with a vision to eliminate gas-related hazards in Hyderabad, Yes Gas Agency has grown into the city\'s most trusted partner for premium, safe, and certified gas appliance servicing.'),
            ('about', 'about_mission', 'To provide absolutely safe, zero-leak, and highly efficient gas services within 60 minutes for every household in Hyderabad, ensuring peace of mind at every meal.'),
            ('about', 'about_vision', 'To become the gold standard in domestic gas apparatus maintenance across South India, pioneered by technology, speed, and uncompromising safety protocols.'),
            ('testimonials', 'testimonials_title', 'Trusted by 5,000+ Families in Hyderabad'),
            ('contact', 'contact_title', 'Don\'t Wait For An Emergency. Get It Fixed Today.'),
            ('contact', 'contact_address', '102, Hitech Lane, Madhapur, Hyderabad, Telangana 500081'),
            ('contact', 'contact_phone', '+91 98765 43210'),
            ('contact', 'contact_email', 'support@yesgas.in'),
            ('services_page', 'services_page_title', 'All Gas Services in Hyderabad'),
            ('services_page', 'services_page_subtitle', 'Certified, fast, and safe — every service comes with a 30-day warranty and ID-verified technicians.'),
            ('pricing', 'pricing_title', 'Clear Pricing. No Surprises.'),
            ('pricing', 'pricing_subtitle', 'We charge flat straightforward fees for all standard procedures. Any spare parts required are billed separately strictly at MRP.'),
            ('how_it_works', 'how_it_works_title', 'Fixed in 3 Simple Steps'),
            ('how_it_works', 'how_it_works_subtitle', 'From first call to working stove — the whole process is designed to be fast and hassle-free.'),
            ('faq', 'faq_title', 'Frequently Asked Questions'),
            ('faq', 'faq_subtitle', 'Have a question about our repair process, pricing, or safety standards? Find practical answers here.'),
            ('areas', 'areas_title', 'We Serve All of Hyderabad'),
            ('areas', 'areas_subtitle', 'Technicians stationed across the city to reach you in 2–4 hours.')";
        $pdo->exec($insert);
    }

    // Initialize images if empty
    $count_img = $pdo->query("SELECT COUNT(*) FROM website_images")->fetchColumn();
    if ($count_img == 0) {
        $insert_img = "INSERT IGNORE INTO website_images (section_name, image_name, image_path) VALUES 
            ('hero', 'hero_bg', '/hero-bg.png'),
            ('services', 'service_1_img', '/service-stove-repair.png'),
            ('services', 'service_2_img', '/service-burner-cleaning.png'),
            ('services', 'service_3_img', '/service-pipeline.png'),
            ('services', 'service_4_img', '/service-gas-leak.png'),
            ('about', 'about_tech_img', '/technician.png')";
        $pdo->exec($insert_img);
    }
} catch(PDOException $e) {
    try {
        $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $sql = "CREATE TABLE IF NOT EXISTS leads (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            service VARCHAR(255),
            message TEXT,
            source VARCHAR(255),
            status ENUM('pending', 'contacted') DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        $pdo->exec($sql);

        $sql_content = "CREATE TABLE IF NOT EXISTS website_content (
            id INT AUTO_INCREMENT PRIMARY KEY,
            section_name VARCHAR(50) NOT NULL,
            field_name VARCHAR(50) NOT NULL,
            field_value TEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY section_field (section_name, field_name)
        )";
        $pdo->exec($sql_content);

        $sql_images = "CREATE TABLE IF NOT EXISTS website_images (
            id INT AUTO_INCREMENT PRIMARY KEY,
            section_name VARCHAR(50) NOT NULL,
            image_name VARCHAR(50) NOT NULL,
            image_path VARCHAR(255) NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY section_image (section_name, image_name)
        )";
        $pdo->exec($sql_images);

        $count = $pdo->query("SELECT COUNT(*) FROM website_content")->fetchColumn();
        if ($count == 0) {
            $insert = "INSERT IGNORE INTO website_content (section_name, field_name, field_value) VALUES 
                ('hero', 'hero_title', 'Stop Struggling With Your Gas Stove —'),
                ('hero', 'hero_subtitle', 'Certified technicians at your door in 2–4 hours. All brands. All problems. 30-day warranty.'),
                ('hero', 'hero_cta', 'Call Now'),
                ('services', 'services_title', 'Book Your Gas Expert Today!'),
                ('services', 'services_subtitle', 'From routine repair to emergency leaks, our certified technicians handle it all with complete safety guarantees.'),
                ('about', 'about_title', 'Safety is Our Religion Today'),
                ('about', 'about_subtitle', 'Every technician carries a multi-point safety checklist. Before leaving, we verify zero leakage using certified pressure testing equipment. Your family\'s safety is non-negotiable.'),
                ('about', 'about_hero_intro', 'Started with a vision to eliminate gas-related hazards in Hyderabad, Yes Gas Agency has grown into the city\'s most trusted partner for premium, safe, and certified gas appliance servicing.'),
                ('about', 'about_mission', 'To provide absolutely safe, zero-leak, and highly efficient gas services within 60 minutes for every household in Hyderabad, ensuring peace of mind at every meal.'),
                ('about', 'about_vision', 'To become the gold standard in domestic gas apparatus maintenance across South India, pioneered by technology, speed, and uncompromising safety protocols.'),
                ('testimonials', 'testimonials_title', 'Trusted by 5,000+ Families in Hyderabad'),
                ('contact', 'contact_title', 'Don\'t Wait For An Emergency. Get It Fixed Today.'),
                ('contact', 'contact_address', '102, Hitech Lane, Madhapur, Hyderabad, Telangana 500081'),
                ('contact', 'contact_phone', '+91 98765 43210'),
                ('contact', 'contact_email', 'support@yesgas.in'),
                ('services_page', 'services_page_title', 'All Gas Services in Hyderabad'),
                ('services_page', 'services_page_subtitle', 'Certified, fast, and safe — every service comes with a 30-day warranty and ID-verified technicians.'),
                ('pricing', 'pricing_title', 'Clear Pricing. No Surprises.'),
                ('pricing', 'pricing_subtitle', 'We charge flat straightforward fees for all standard procedures. Any spare parts required are billed separately strictly at MRP.'),
                ('how_it_works', 'how_it_works_title', 'Fixed in 3 Simple Steps'),
                ('how_it_works', 'how_it_works_subtitle', 'From first call to working stove — the whole process is designed to be fast and hassle-free.'),
                ('faq', 'faq_title', 'Frequently Asked Questions'),
                ('faq', 'faq_subtitle', 'Have a question about our repair process, pricing, or safety standards? Find practical answers here.'),
                ('areas', 'areas_title', 'We Serve All of Hyderabad'),
                ('areas', 'areas_subtitle', 'Technicians stationed across the city to reach you in 2–4 hours.')";
            $pdo->exec($insert);
        }

        $count_img = $pdo->query("SELECT COUNT(*) FROM website_images")->fetchColumn();
        if ($count_img == 0) {
            $insert_img = "INSERT IGNORE INTO website_images (section_name, image_name, image_path) VALUES 
                ('hero', 'hero_bg', '/hero-bg.png'),
                ('services', 'service_1_img', '/service-stove-repair.png'),
                ('services', 'service_2_img', '/service-burner-cleaning.png'),
                ('services', 'service_3_img', '/service-pipeline.png'),
                ('services', 'service_4_img', '/service-gas-leak.png'),
                ('about', 'about_tech_img', '/technician.png')";
            $pdo->exec($insert_img);
        }
    } catch(PDOException $e2) {
        die(json_encode(["success" => false, "message" => "Database connection failed."]));
    }
}
?>
