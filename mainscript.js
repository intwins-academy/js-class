const products = [
  {
    name: "Laptop",
    price: "$999",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartphone",
    price: "$1999",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Headphone",
    price: "$300",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
  {
    name: "Smartwatch",
    price: "$899",
    image:
      "https://www.ryans.com/storage/products/main/hp-15s-fq5786tu-intel-core-i3-1215u-8gb-ram-512gb-51710654841.webp",
  },
];

const productcontainer = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  //   console.log(product.name);

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
  <img src="${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>${product.price}</p>
`;

  productcontainer.appendChild(productCard);
  console.log(productCard);
}
