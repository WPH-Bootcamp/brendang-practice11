let promise = new Promise(function (resolve, reject) {
  // Fungsi ini dijalankan secara otomatis ketika Promise dibuat

  // Setelah 1 detik, tugas selesai dengan sukses
  setTimeout(() => resolve("Selesai!"), 1000);
});

promise
  .then(function (result) {
    /* menangani hasil sukses */
    console.log(result); // Output: Selesai!},
  })
  .catch(function (error) {
    /* menangani kesalahan */
    console.log("Error: " + error); // Output: Selesai!
  })
  .finally(() => {
    // kode ini akan dijalankan terlepas dari hasilnya
    console.log("Promise telah selesai (baik sukses maupun gagal)");
  });
