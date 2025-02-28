require('dotenv').config()
const express = require('express');
const suger = require('./routes/suger.routes');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8000;
require('./db/db')

app.use(express.urlencoded({
    extended: true
}))


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

app.use(express.json());
app.use(cors());
app.use('/api/v1', suger);
// API Endpoint to Display Justifications in Table Format
app.get("/justifications", (req, res) => {
    let html = `
        <html>
        <head>
            <title>Chrome Extension Permissions Justification</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                th { background-color: #f4f4f4; }
            </style>
        </head>
        <body>
            <h2>Chrome Extension Permissions Justification</h2>
            <table>
                <tr>
                    <th>Permission</th>
                    <th>Justification</th>
                </tr>`;

    permissionsJustifications.forEach(item => {
        html += `
                <tr>
                    <td><b>${item.permission}</b></td>
                    <td>${item.justification}</td>
                </tr>`;
    });

    html += `
            </table>
        </body>
        </html>`;

    res.send(html);
});



app.listen(PORT, () => {
    console.log(`connected on ${PORT}`);
});
