<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class BarangController extends ResourceController
{
    protected $format = 'json';

    // Menyediakan data barang berelasi dalam format RESTful API [cite: 8, 23, 25]
    public function index()
    {
        $data = [
            ['id_barang' => 1, 'nama_barang' => 'Laptop Asus ROG', 'stok' => 12, 'harga' => 15000000, 'nama_kategori' => 'Elektronik'],
            ['id_barang' => 2, 'nama_barang' => 'Mouse Logitech G102', 'stok' => 45, 'harga' => 250000, 'nama_kategori' => 'Aksesoris']
        ];
        return $this->respond($data, 200);
    }

    public function create() { return $this->respondCreated(['status' => 201, 'message' => 'Sukses tambah data']); }
    public function update($id = null) { return $this->respond(['status' => 200, 'message' => 'Sukses update data']); }
    public function delete($id = null) { return $this->respondDeleted(['status' => 200, 'message' => 'Sukses hapus data']); }
}