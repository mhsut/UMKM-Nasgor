<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Kasir | NASI GORENG FIKAR</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <header class="navbar">

        <div class="logo">
            <span>🍳</span>
            NASGOR
        </div>

        <nav>
            <a href="index.html">Home</a>
            <a href="menu.html">Menu</a>
        </nav>

    </header>


    <main>

        <section class="menu-header">

            <p class="subtitle">
                SISTEM KASIR
            </p>

            <h1>
                PESANAN ANDA
            </h1>

            <p class="description">
                NASI GORENG FIKAR
            </p>

        </section>


        <section class="cart">

            <h2>Detail Pesanan</h2>

            <div id="kasir-items">
                Memuat pesanan...
            </div>

        </section>

    </main>


    <script>

        const keranjang = JSON.parse(
            localStorage.getItem("keranjang")
        ) || [];

        const kasirItems = document.getElementById("kasir-items");

        let isi = "";
        let total = 0;

        keranjang.forEach(function(item) {

            const subtotal = item.harga * item.jumlah;

            total += subtotal;

            isi += `
                <div class="cart-item">

                    <strong>${item.nama}</strong>

                    <span>
                        ${item.jumlah} x
                        Rp ${item.harga.toLocaleString("id-ID")}
                    </span>

                    <strong>
                        Rp ${subtotal.toLocaleString("id-ID")}
                    </strong>

                </div>
            `;

        });


        if (keranjang.length === 0) {

            isi = "Tidak ada pesanan.";

        } else {

            isi += `
                <div class="cart-total">
                    Total:
                    Rp ${total.toLocaleString("id-ID")}
                </div>
            `;

        }


        kasirItems.innerHTML = isi;

    </script>

</body>

</html>