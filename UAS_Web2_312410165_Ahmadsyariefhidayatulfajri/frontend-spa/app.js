// ==========================================
// 1. DEFINISI KOMPONEN HALAMAN (MODULAR)
// ==========================================

// A. Halaman Beranda / Public (Tanpa Login)
const Home = {
    template: `
        <div class="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-teal-500">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Sistem Manajemen Inventaris Barang</h1>
            <p class="text-gray-600 mb-6">Selamat datang di aplikasi E-Inventory. Kelola data stok, kategori, dan supplier dengan mudah.</p>
            <div class="inline-block bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full border border-teal-200">
                Status Pengunjung: Publik (Akses Terbatas)
            </div>
        </div>
    `
};

// B. Halaman Login Form (Tailwind Terstandardisasi)
const Login = {
    data() {
        return { username: '', password: '' }
    },
    template: `
        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Login Admin</h2>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input v-model="username" type="text" class="w-full p-2 border rounded-md focus:outline-teal-500" placeholder="Masukkan username...">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input v-model="password" type="password" class="w-full p-2 border rounded-md focus:outline-teal-500" placeholder="******">
            </div>
            <button @click="submitLogin" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold p-2 rounded-md transition cursor-pointer">
                Masuk ke Dashboard
            </button>
        </div>
    `,
    methods: {
        submitLogin() {
            // Simulasi nembak API Login dulu biar frontend-nya jalan malam ini
            if (this.username === 'admin' && this.password === 'admin123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('token', 'CONTOH_TOKEN_BEARER_UAS_WEB2');
                window.location.href = '#/barang';
                window.location.reload();
            } else {
                alert('Username / Password salah! (Gunakan admin & admin123)');
            }
        }
    }
};

// C. Halaman Dashboard Barang (Wajib Login)
const Barang = {
    data() {
        return {
            // Contoh data sementara agar tabel tidak kosong saat dites malam ini
            listBarang: [
                { id_barang: 1, nama_barang: 'Laptop Asus ROG', stok: 12, harga: 'Rp 15.000.000' },
                { id_barang: 2, nama_barang: 'Mouse Logitech G102', stok: 45, harga: 'Rp 250.000' }
            ]
        }
    },
    template: `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Manajemen Stok Barang</h2>
                <button class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition cursor-pointer">
                    + Tambah Barang
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-100 border-b border-gray-200 text-gray-700 font-semibold">
                            <th class="p-3">ID</th><th class="p-3">Nama Barang</th><th class="p-3">Stok</th><th class="p-3">Harga</th><th class="p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="b in listBarang" :key="b.id_barang" class="border-b border-gray-100 hover:bg-gray-50">
                            <td class="p-3 font-medium">{{ b.id_barang }}</td>
                            <td class="p-3 text-gray-800">{{ b.nama_barang }}</td>
                            <td class="p-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">{{ b.stok }} Pcs</span></td>
                            <td class="p-3 text-gray-600">{{ b.harga }}</td>
                            <td class="p-3 text-center space-x-2">
                                <button class="text-blue-600 hover:underline text-sm font-semibold cursor-pointer">Edit</button>
                                <button class="text-red-600 hover:underline text-sm font-semibold cursor-pointer">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// ==========================================
// 2. SETTING ROUTER & NAVIGATION GUARD (SECURITY)
// ==========================================
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/barang', component: Barang, meta: { requiresAuth: true } } // Butuh login
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

// Navigation Guard: Mencegah user ilegal masuk halaman admin
router.beforeEach((to, from, next) => {
    const isAuth = localStorage.getItem('isLoggedIn') === 'true';
    if (to.meta.requiresAuth && !isAuth) {
        alert('Akses Ditolak! Anda harus login terlebih dahulu.');
        next('/login');
    } else {
        next();
    }
});

// ==========================================
// 3. RUN VUE INSTANCE
// ==========================================
const app = Vue.createApp({
    data() {
        return {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
        }
    },
    methods: {
        handleLogout() {
            localStorage.clear(); // Hapus token & session
            window.location.href = '#/';
            window.location.reload();
        }
    }
});

app.use(router);
app.mount('#app');