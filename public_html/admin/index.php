<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: /admin/login.php");
    exit();
}

$api_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/api/get_leads.php";
$base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Yes Gas Agency</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 flex flex-col h-screen">

    <!-- Header -->
    <header class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <h1 class="text-xl font-black text-gray-900">Admin Dashboard</h1>
        <div class="flex gap-4 items-center">
            <button onclick="toggleView('leads')" id="btn-leads" class="text-sm font-bold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-lg transition-colors">Leads</button>
            <button onclick="toggleView('content')" id="btn-content" class="text-sm font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded-lg transition-colors">Manage Content</button>
            <a href="logout.php" class="text-sm font-bold text-red-500 hover:text-red-700 bg-red-50 py-1.5 px-4 rounded-lg transition-colors">Logout</a>
        </div>
    </header>

    <!-- Content -->
    <main class="flex-1 overflow-auto p-6">
        <div class="max-w-7xl mx-auto">
            
            <!-- Leads View -->
            <div id="view-leads" class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden block">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                            <th class="p-4">Date</th>
                            <th class="p-4">Name</th>
                            <th class="p-4">Contact</th>
                            <th class="p-4">Service Required</th>
                            <th class="p-4">Details</th>
                            <th class="p-4">Source</th>
                            <th class="p-4">Status</th>
                            <th class="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="leadsTableBody" class="divide-y divide-gray-100 text-sm text-gray-700">
                        <tr><td colspan="8" class="p-4 text-center text-gray-400">Loading leads...</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Content View -->
            <div id="view-content" class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hidden p-6">
                <h2 class="text-2xl font-black text-gray-900 mb-6">Website Content & Images</h2>
                
                <form id="contentForm" onsubmit="saveContent(event)" class="space-y-8">
                    
                    <!-- HERO SECTION -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">Hero Section</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-1">Hero Title</label>
                                    <input type="text" id="hero_title" name="hero_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-1">Hero Subtitle</label>
                                    <textarea id="hero_subtitle" name="hero_subtitle" rows="3" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required></textarea>
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-1">Hero CTA Text</label>
                                    <input type="text" id="hero_cta" name="hero_cta" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required>
                                </div>
                            </div>
                            <!-- Hero Image -->
                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center">
                                <label class="block text-sm font-semibold text-gray-700 mb-2 w-full text-left">Hero Background Image</label>
                                <img id="hero_bg_preview" src="" class="w-full h-32 object-cover rounded-lg mb-4 bg-gray-200" alt="Preview">
                                <input type="file" id="hero_bg_file" accept=".jpg,.png,.webp" class="text-xs text-gray-500 w-full mb-2">
                                <button type="button" onclick="uploadImage('hero', 'hero_bg', 'hero_bg_file', 'hero_bg_preview')" class="text-xs bg-blue-100 text-blue-700 font-bold px-3 py-1.5 rounded hover:bg-blue-200 transition">Upload Image</button>
                            </div>
                        </div>
                    </div>

                    <!-- SERVICES SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="flex items-center justify-between border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">Services Section</h3>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Services Title</label>
                            <input type="text" id="services_title" name="services_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Services Subtitle</label>
                            <textarea id="services_subtitle" name="services_subtitle" rows="2" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required></textarea>
                        </div>
                        
                        <!-- Services Images -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <!-- S1 -->
                            <div class="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col items-center">
                                <label class="block text-xs font-semibold text-gray-700 mb-2 w-full text-center">Service 1</label>
                                <img id="service_1_img_preview" src="" class="w-20 h-20 object-cover rounded shadow-sm mb-3 bg-white" alt="Preview">
                                <input type="file" id="service_1_img_file" accept=".jpg,.png,.webp" class="text-[10px] text-gray-500 w-full mb-2">
                                <button type="button" onclick="uploadImage('services', 'service_1_img', 'service_1_img_file', 'service_1_img_preview')" class="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded w-full hover:bg-blue-200 transition">Upload Image</button>
                            </div>
                            <!-- S2 -->
                            <div class="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col items-center">
                                <label class="block text-xs font-semibold text-gray-700 mb-2 w-full text-center">Service 2</label>
                                <img id="service_2_img_preview" src="" class="w-20 h-20 object-cover rounded shadow-sm mb-3 bg-white" alt="Preview">
                                <input type="file" id="service_2_img_file" accept=".jpg,.png,.webp" class="text-[10px] text-gray-500 w-full mb-2">
                                <button type="button" onclick="uploadImage('services', 'service_2_img', 'service_2_img_file', 'service_2_img_preview')" class="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded w-full hover:bg-blue-200 transition">Upload Image</button>
                            </div>
                            <!-- S3 -->
                            <div class="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col items-center">
                                <label class="block text-xs font-semibold text-gray-700 mb-2 w-full text-center">Service 3</label>
                                <img id="service_3_img_preview" src="" class="w-20 h-20 object-cover rounded shadow-sm mb-3 bg-white" alt="Preview">
                                <input type="file" id="service_3_img_file" accept=".jpg,.png,.webp" class="text-[10px] text-gray-500 w-full mb-2">
                                <button type="button" onclick="uploadImage('services', 'service_3_img', 'service_3_img_file', 'service_3_img_preview')" class="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded w-full hover:bg-blue-200 transition">Upload Image</button>
                            </div>
                            <!-- S4 -->
                            <div class="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col items-center">
                                <label class="block text-xs font-semibold text-gray-700 mb-2 w-full text-center">Service 4</label>
                                <img id="service_4_img_preview" src="" class="w-20 h-20 object-cover rounded shadow-sm mb-3 bg-white" alt="Preview">
                                <input type="file" id="service_4_img_file" accept=".jpg,.png,.webp" class="text-[10px] text-gray-500 w-full mb-2">
                                <button type="button" onclick="uploadImage('services', 'service_4_img', 'service_4_img_file', 'service_4_img_preview')" class="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded w-full hover:bg-blue-200 transition">Upload Image</button>
                            </div>
                        </div>
                    </div>

                    <!-- ABOUT SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="flex items-center justify-between border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">About / Why Choose Us</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-1">About Title</label>
                                    <input type="text" id="about_title" name="about_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required>
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-1">About Description</label>
                                    <textarea id="about_subtitle" name="about_subtitle" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required></textarea>
                                </div>
                            </div>
                            <!-- About Image -->
                            <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center">
                                <label class="block text-sm font-semibold text-gray-700 mb-2 w-full text-left">About Image (Technician)</label>
                                <img id="about_tech_img_preview" src="" class="w-32 h-32 object-cover rounded-lg mb-4 bg-gray-200" alt="Preview">
                                <input type="file" id="about_tech_img_file" accept=".jpg,.png,.webp" class="text-xs text-gray-500 w-full mb-2">
                                <button type="button" onclick="uploadImage('about', 'about_tech_img', 'about_tech_img_file', 'about_tech_img_preview')" class="text-xs bg-blue-100 text-blue-700 font-bold px-3 py-1.5 rounded hover:bg-blue-200 transition">Upload Image</button>
                            </div>
                        </div>
                    </div>

                    <!-- TESTIMONIALS SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="flex items-center justify-between border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">Testimonials</h3>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Testimonials Title</label>
                            <input type="text" id="testimonials_title" name="testimonials_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required>
                        </div>
                    </div>

                    <!-- CONTACT SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="flex items-center justify-between border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">Contact / Final CTA</h3>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Contact Title (Final CTA)</label>
                            <input type="text" id="contact_title" name="contact_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm" required>
                        </div>
                    </div>

                    <!-- ABOUT PAGE SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">📄 About Page Content</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls text shown on the /about page</p>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">About Hero Introduction</label>
                            <textarea id="about_hero_intro" name="about_hero_intro" rows="3" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"></textarea>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">Mission Statement</label>
                                <textarea id="about_mission" name="about_mission" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">Vision Statement</label>
                                <textarea id="about_vision" name="about_vision" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- SERVICES PAGE SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">🔧 Services Page Content</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls the hero heading on the /services page</p>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Services Page Title</label>
                            <input type="text" id="services_page_title" name="services_page_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Services Page Subtitle</label>
                            <textarea id="services_page_subtitle" name="services_page_subtitle" rows="2" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"></textarea>
                        </div>
                    </div>

                    <!-- CONTACT PAGE SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">📞 Contact Page Info</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls address, phone and email shown on /contact page info cards</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                                <input type="text" id="contact_address" name="contact_address" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">Phone (Display)</label>
                                <input type="text" id="contact_phone" name="contact_phone" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">Email (Display)</label>
                                <input type="text" id="contact_email" name="contact_email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                            </div>
                        </div>
                    </div>

                    <!-- PRICING PAGE SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">💰 Pricing Page Content</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls heading and subtitle on the /pricing page</p>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Pricing Page Title</label>
                            <input type="text" id="pricing_title" name="pricing_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Pricing Page Subtitle</label>
                            <textarea id="pricing_subtitle" name="pricing_subtitle" rows="2" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"></textarea>
                        </div>
                    </div>

                    <!-- HOW IT WORKS SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">⚙️ How It Works Section</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls the heading and subtitle of the "How It Works" section on the homepage</p>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Section Heading</label>
                            <input type="text" id="how_it_works_title" name="how_it_works_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Section Subtitle</label>
                            <input type="text" id="how_it_works_subtitle" name="how_it_works_subtitle" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                    </div>

                    <!-- FAQ SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">❓ FAQ Section</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls the heading and intro text of the FAQ section on the homepage</p>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">FAQ Heading</label>
                            <input type="text" id="faq_title" name="faq_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">FAQ Intro Text</label>
                            <textarea id="faq_subtitle" name="faq_subtitle" rows="2" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"></textarea>
                        </div>
                    </div>

                    <!-- SERVICE AREAS SECTION -->
                    <div class="space-y-4 pt-4 border-t border-gray-100">
                        <div class="border-b pb-2">
                            <h3 class="text-lg font-bold text-gray-800">📍 Service Areas Section</h3>
                            <p class="text-xs text-gray-400 mt-1">Controls the title and subtitle of the Service Areas section on the homepage</p>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Areas Section Title</label>
                            <input type="text" id="areas_title" name="areas_title" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Areas Section Subtitle</label>
                            <input type="text" id="areas_subtitle" name="areas_subtitle" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                        </div>
                    </div>

                    <div class="pt-6 border-t border-gray-200 flex justify-end">
                        <button type="submit" id="saveContentBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-lg shadow-sm transition-colors cursor-pointer text-sm">
                            Save All Text Changes
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </main>

    <script>
        const API_URL = "<?= $base_url ?>/api";

        async function fetchLeads() {
            try {
                const res = await fetch(`${API_URL}/get_leads.php`);
                const json = await res.json();
                const tbody = document.getElementById('leadsTableBody');
                
                if (json.success && json.data.length > 0) {
                    tbody.innerHTML = '';
                    json.data.forEach(lead => {
                        const dateObj = new Date(lead.created_at);
                        const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                        
                        const isContacted = lead.status === 'contacted';
                        const statusBadge = isContacted 
                            ? `<span class="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Contacted</span>`
                            : `<span class="px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Pending</span>`;
                        
                        const actionBtn = isContacted
                            ? `<button onclick="updateLead(${lead.id}, 'pending')" class="text-yellow-600 hover:text-yellow-800 text-xs font-bold border border-yellow-200 bg-yellow-50 px-2 py-1 rounded">Mark Pending</button>`
                            : `<button onclick="updateLead(${lead.id}, 'contacted')" class="text-green-600 hover:text-green-800 text-xs font-bold border border-green-200 bg-green-50 px-2 py-1 rounded">Mark Contacted</button>`;

                        const tr = document.createElement('tr');
                        tr.className = "hover:bg-gray-50 transition-colors";
                        if(isContacted) tr.classList.add('opacity-75'); // dim if contacted

                        tr.innerHTML = `
                            <td class="p-4 whitespace-nowrap text-gray-500 text-xs border-r border-gray-100">${dateStr}</td>
                            <td class="p-4 font-bold text-gray-900 border-r border-gray-100">${lead.name}</td>
                            <td class="p-4 border-r border-gray-100"><a href="tel:${lead.phone}" class="text-blue-600 hover:underline font-semibold">${lead.phone}</a></td>
                            <td class="p-4 font-semibold text-gray-800 border-r border-gray-100">${lead.service || '-'}</td>
                            <td class="p-4 text-xs text-gray-500 border-r border-gray-100 max-w-[200px] truncate" title="${lead.message}">${lead.message || '-'}</td>
                            <td class="p-4 text-xs text-gray-500 border-r border-gray-100">${lead.source}</td>
                            <td class="p-4 border-r border-gray-100">${statusBadge}</td>
                            <td class="p-4 flex gap-2">
                                ${actionBtn}
                                <button onclick="deleteLead(${lead.id})" class="text-red-500 hover:text-red-700 text-xs font-bold border border-red-200 bg-red-50 px-2 py-1 rounded">Delete</button>
                            </td>
                        `;
                        tbody.appendChild(tr);
                    });
                } else {
                    tbody.innerHTML = '<tr><td colspan="8" class="p-8 text-center text-gray-500 font-semibold">No leads found.</td></tr>';
                }
            } catch (err) {
                console.error(err);
                document.getElementById('leadsTableBody').innerHTML = '<tr><td colspan="8" class="p-4 text-center text-red-500">Failed to load leads from database.</td></tr>';
            }
        }

        async function updateLead(id, status) {
            if(!confirm(`Mark this lead as ${status}?`)) return;
            try {
                const res = await fetch(`${API_URL}/update_lead.php`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({id, status})
                });
                await res.json();
                fetchLeads();
            } catch(e) {
                alert('Error updating lead');
            }
        }

        async function deleteLead(id) {
            if(!confirm(`Are you sure you want to delete this lead? This cannot be undone.`)) return;
            try {
                const res = await fetch(`${API_URL}/delete_lead.php`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({id})
                });
                await res.json();
                fetchLeads();
            } catch(e) {
                alert('Error deleting lead');
            }
        }

        // Manage Views Toggle
        function toggleView(view) {
            document.getElementById('view-leads').classList.toggle('hidden', view !== 'leads');
            document.getElementById('view-leads').classList.toggle('block', view === 'leads');
            
            document.getElementById('view-content').classList.toggle('hidden', view !== 'content');
            document.getElementById('view-content').classList.toggle('block', view === 'content');

            document.getElementById('btn-leads').className = view === 'leads' 
                ? 'text-sm font-bold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-lg transition-colors' 
                : 'text-sm font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded-lg transition-colors';
                
            document.getElementById('btn-content').className = view === 'content' 
                ? 'text-sm font-bold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-lg transition-colors' 
                : 'text-sm font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded-lg transition-colors';
                
            if(view === 'content') fetchContent();
        }

        // Fetch Content & Images
        async function fetchContent() {
            try {
                // Fetch Texts
                const res = await fetch(`${API_URL}/get_content.php`);
                const json = await res.json();
                if (json.success && json.data) {
                    for (const [key, val] of Object.entries(json.data)) {
                        const el = document.getElementById(key);
                        if (el) el.value = val;
                    }
                }

                // Fetch Images
                const imgRes = await fetch(`${API_URL}/get_images.php`);
                const imgJson = await imgRes.json();
                if (imgJson.success && imgJson.data) {
                    for (const [key, val] of Object.entries(imgJson.data)) {
                        const previewEl = document.getElementById(`${key}_preview`);
                        if (previewEl) previewEl.src = val;
                    }
                }
            } catch (err) {
                console.error("Failed to fetch content/images", err);
            }
        }

        // Upload Image
        async function uploadImage(sectionName, imageName, inputFileId, previewId) {
            const fileInput = document.getElementById(inputFileId);
            if (!fileInput.files || fileInput.files.length === 0) {
                alert("Please select an image file first.");
                return;
            }

            const formData = new FormData();
            formData.append('section_name', sectionName);
            formData.append('image_name', imageName);
            formData.append('image', fileInput.files[0]);

            try {
                const res = await fetch(`${API_URL}/upload_image.php`, {
                    method: 'POST',
                    body: formData
                });
                const json = await res.json();
                if (json.success) {
                    document.getElementById(previewId).src = json.image_path + '?t=' + new Date().getTime();
                    alert("Image updated and saved successfully!");
                } else {
                    alert("Error: " + json.message);
                }
            } catch (err) {
                console.error(err);
                alert('Connection error uploading image.');
            }
        }

        // Save Content
        async function saveContent(e) {
            e.preventDefault();
            const btn = document.getElementById('saveContentBtn');
            const originalText = btn.innerText;
            btn.innerText = 'Saving...';
            btn.disabled = true;

            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            try {
                const res = await fetch(`${API_URL}/update_content.php`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const json = await res.json();
                if (json.success) {
                    btn.innerText = 'Saved!';
                    setTimeout(() => { btn.innerText = originalText; btn.disabled = false; }, 2000);
                } else {
                    alert('Error saving content: ' + json.message);
                    btn.innerText = originalText; btn.disabled = false;
                }
            } catch (err) {
                console.error(err);
                alert('Connection error saving content.');
                btn.innerText = originalText; btn.disabled = false;
            }
        }

        // Init
        document.addEventListener('DOMContentLoaded', fetchLeads);
    </script>
</body>
</html>
