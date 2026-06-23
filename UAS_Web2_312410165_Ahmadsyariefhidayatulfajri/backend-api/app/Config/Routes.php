<?php

namespace Config;
// Baris standar CodeIgniter 4 untuk routing
$routes = Services::routes();

// Rute API Tugas UAS [cite: 1, 25]
$routes->post('api/login', 'Auth::login');

$routes->group('api', ['filter' => 'authFilter'], function($routes) {
    $routes->resource('barang', ['controller' => 'BarangController']);
});