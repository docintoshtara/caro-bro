require('dotenv').config()
const express = require('express');
const suger = require('./routes/suger.routes');
const video = require('./routes/video.routes')
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8000;
require('./db/db')

const permissionsJustifications = [
    { permission: "activeTab", justification: "Required to interact with the currently active tab for displaying reminders or providing alerts based on user activity." },
    { permission: "alarms", justification: "Used to schedule periodic reminders for eye exercises or screen breaks." },
    { permission: "contextMenus", justification: "Allows users to set reminders directly from the right-click menu for ease of access." },
    { permission: "host_permissions", justification: "Required to interact with external web resources for health-related tips (e.g., https://caro-bro.vercel.app/*)." },
    { permission: "scripting", justification: "Used to modify or inject scripts into web pages to provide UI changes or alerts related to reminders." },
    { permission: "storage", justification: "Saves user preferences, reminder settings, and customization options." },
    { permission: "tabs", justification: "Required to check open tabs and remind users based on their screen usage." },
    { permission: "single_purpose_description", justification: "Flo Pal helps users maintain healthy eye habits by providing periodic alarms and reminders for eye exercises and screen breaks." }
];

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(cors());
app.use('/api/v1', suger);
app.use('/api/v1', video);

// API Endpoint to Display Justifications in Table Format
app.get("/privacy", (req, res) => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Privacy Policy</title>
<style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            color: #333;
        }
        p {
            color: #666;
            line-height: 1.6;
        }
</style>
</head>
<body>
<div class="container">
<h1>Privacy Policy</h1>
<p><strong>Effective Date:</strong> 01-03-2025</p>
<h2>1. Introduction</h2>
<p>Flo Pal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our Chrome extension.</p>
<h2>2. Information We Collect</h2>
<p>Our Chrome extension may collect the following types of information:</p>
<ul>
<li><strong>Personal Information:</strong> We do not collect any personally identifiable information.</li>
<li><strong>Non-Personal Information:</strong> We may collect anonymous usage data, such as extension settings and interactions.</li>
<li><strong>Permissions:</strong> The extension may request certain permissions (such as `activeTab`, `storage`, `alarms`, `contextMenus`, and `tabs`) to function correctly, but we do not misuse these permissions.</li>
</ul>
<h2>3. How We Use the Information</h2>
<p>We use the collected information solely for the following purposes:</p>
<ul>
<li>To provide core functionality of the extension.</li>
<li>To improve the performance and user experience of the extension.</li>
<li>To store user preferences locally on your device.</li>
</ul>
<h2>4. Data Sharing & Third-Party Services</h2>
<p>We do not sell, trade, or rent your data. No third-party analytics or tracking tools are used. If our extension interacts with third-party services, it will be solely for the purpose of providing necessary features.</p>
<h2>5. Security Measures</h2>
<p>We take reasonable steps to protect user data from unauthorized access or disclosure. However, as no method of transmission over the internet is 100% secure, we cannot guarantee absolute security.</p>
<h2>6. Changes to This Policy</h2>
<p>We may update this Privacy Policy periodically. Users will be notified of any significant changes through the Chrome Web Store or within the extension itself.</p>
<h2>7. Contact Us</h2>
<p>If you have any questions regarding this Privacy Policy, you can contact us at: <strong>flopalextention@gmail.com</strong></p>
</div>
</body>
</html>`;

    res.send(html);
});



app.listen(PORT, () => {
    console.log(`connected on ${PORT}`);
});
