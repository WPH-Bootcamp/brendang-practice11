fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data1) => {
    console.log("Data post dengan id 1:", data1);
    // Setelah data dengan id 1 didapatkan, lanjut ambil data dengan id 2
    return fetch("https://jsonplaceholder.typicode.com/posts/2");
  })
  .then((response) => response.json())
  .then((data2) => {
    console.log("Data post dengan id 2:", data2);
    // Setelah data dengan id 2 didapatkan, lanjut ambil data dengan id 3
    return fetch("https://jsonplaceholder.typicode.com/posts/3");
  })
  .then((response) => response.json())
  .then((data3) => {
    console.log("Data post dengan id 3:", data3);
  });
