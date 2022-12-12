interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  {
    name: "McIntosh MA230",
    price: 5000,
  },
  {
    name: "Apple HomePod Mini",
    price: 100,
  },
  {
    name: "Bose SoundDock",
    price: 300,
  },
];

function calcAverageProductPrice(products: Product[]): number {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}
console.log(calcAverageProductPrice(products));

export { calcAverageProductPrice, Product };
