let keranjang = [];


// ===============================
// TAMBAH PESANAN
// ===============================

function tambahPesanan(nama, harga) {

    // Cari apakah menu sudah ada
    const item = keranjang.find(
        function(produk) {
            return produk.nama === nama;
        }
    );

    // Kalau sudah ada, jumlah ditambah
    if (item) {

        item.jumlah++;

    } 
    // Kalau belum ada, masukkan sebagai item baru
    else {

        keranjang.push({
            nama: nama,
            harga: harga,
            jumlah: 1
        });

    }

    tampilkanKeranjang();
}


// ===============================
// TAMPILKAN KERANJANG
// ===============================

function tampilkanKeranjang() {

    const cartItems = document.getElementById("cart-items");

    let isi = "";
    let total = 0;

    for (let i = 0; i < keranjang.length; i++) {

        const item = keranjang[i];

        const subtotal = item.harga * item.jumlah;

        total += subtotal;

        isi += `
            <div class="cart-item">

                <div>
                    <strong>${item.nama}</strong>

                    <p>
                        Rp ${item.harga.toLocaleString("id-ID")}
                    </p>
                </div>

            <div class="cart-controls">

                <button onclick="kurangiJumlah(${i})">
                     −
                </button>

                <span>
                    ${item.jumlah}
                </span>

                <button onclick="tambahJumlah(${i})">
                    +
                </button>

                <button onclick="hapusPesanan(${i})">
                    Hapus
                </button>

            </div>
        `;
    }

    // Kalau keranjang kosong
    if (keranjang.length === 0) {

        isi = "Belum ada pesanan.";

    }

    isi += `
        <div class="cart-total">
            <strong>
                Total: Rp ${total.toLocaleString("id-ID")}
            </strong>
        </div>
    `;

    cartItems.innerHTML = isi;

    localStorage.setItem(
    "keranjang",
    JSON.stringify(keranjang)
);
}


// ===============================
// TAMBAH JUMLAH
// ===============================

function tambahJumlah(index) {

    keranjang[index].jumlah++;

    tampilkanKeranjang();
}


// ===============================
// KURANGI JUMLAH
// ===============================

function kurangiJumlah(index) {

    keranjang[index].jumlah--;

    // Kalau jumlah menjadi 0,
    // item dihapus dari keranjang

    if (keranjang[index].jumlah <= 0) {

        keranjang.splice(index, 1);

    }

    tampilkanKeranjang();
}

function hapusPesanan(index) {

    keranjang.splice(index, 1);

    tampilkanKeranjang();
}

function checkout() {

    if (keranjang.length === 0) {

        alert("Keranjang masih kosong.");

        return;
    }

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );

    window.location.href = "kasir.php";
}