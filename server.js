// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Port server, default 3000

// Middleware untuk melayani file statis dari direktori root
// Ini akan melayani index.html, login.html, admin.html, CSS, JS, dll.
app.use(express.static(path.join(__dirname)));

// Route untuk halaman utama (index.html)
// Jika ada permintaan ke root URL, kirim index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route untuk halaman login (login.html)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Route untuk halaman admin (admin.html)
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log('Akses halaman utama di /');
    console.log('Akses halaman login di /login');
    console.log('Akses halaman admin di /admin');
});

